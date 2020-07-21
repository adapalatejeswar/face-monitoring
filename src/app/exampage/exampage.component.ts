import { Component, OnInit, EventEmitter, ɵConsole } from '@angular/core';
import { Router } from '@angular/router';
// 1 added new for monitoring - starts//
import { Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
// 1 added new for monitoring - ends//
import * as io from 'socket.io-client';
import { Socket } from 'socket.io-client';

@Component({
  selector: 'app-exampage',
  templateUrl: './exampage.component.html',
  styleUrls: ['./exampage.component.scss']
})
export class ExampageComponent implements OnInit {
  public socket: any
  constructor(private router: Router, private http: HttpClient) {
    //this.socket = io.connect();
    this.socket = io('http://localhost:5000', { transports: ['polling'] })
  } //2 added for HTTPClien
  //socket = io('http://localhost:5000')
  // 3 added new for monitoring - starts//
  public pictureTaken = new EventEmitter<WebcamImage>();
  public imagestr: any;
  public showWebcam = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public returnval: string;
  public intervalHandle: any;
  public videoOptions: MediaTrackConstraints = {
    width: {ideal: 160},
    height: {ideal: 120}
  };
  public width: number = 100;
  public height: number = 100;
  public errors: WebcamInitError[] = [];
  public webcamImage: WebcamImage = null;
  public outimg : string = '';
  private trigger: Subject<void> = new Subject<void>();
  loginResponse: string
  // 3 added new for monitoring - ends//

  public handleImage(webcamImage: WebcamImage): void {
    // console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;

  }


  // 4 added new for monitoring - starts//

  public ngOnInit(): void {

    // this.socket.on('connect', function(){
    //   this.socket.emit('user is conencted!!!');
    // });


    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      }).then(() => {
        this.socketcontinue();
      });

  }

  public socketcontinue(): void {
    this.socket.on('image_out', (message) => {
      this.outimg = "data:image/png;base64,"+message;
    })
    this.intervalHandle = setInterval(() => {
      this.trigger.next();
      this.socket.emit('image', this.webcamImage.imageAsBase64);
    }, 40);
  };

  public postcontinue(): void {
    this.intervalHandle =
      setInterval(() => {
        this.trigger.next();
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        this.http.post("http://localhost:5000/videoStreaming", { img: this.webcamImage.imageAsBase64 }, { headers }).subscribe((res: any) => {
          //this.loginResponse = JSON.stringify(res)
          //  alert(this.loginResponse);  
          if (res.valid === false) {
            alert(res.error);
          }
          console.log(res);

        })
      }, 40); // currently interval is set for every 5 seconds.
  };

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  // 4 added new for monitoring - ends//

  completeExam() {
    console.log('in the complete')
    clearInterval(this.intervalHandle);
    this.trigger.next();
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    // this.http.post("http://localhost:5000/videoStreamingClose", { img: this.webcamImage.imageAsBase64 }, {headers }).subscribe((res:any) => {
    //this.loginResponse = JSON.stringify(res)
    //  alert(this.loginResponse);  
    // if (res.valid === false){
    //   alert(res.error);
    // }
    //console.log(res);
    //});

    // this.socket.emit('disconnect');
    // this.socket.disconnect();

    this.router.navigate(['examcomplete']);
  }

}
