import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  public pictureTaken = new EventEmitter<WebcamImage>();
  public errors: WebcamInitError[] = [];
  public showWebcam = true;
  file: File
  signupFile: File
  username: string = "";
  emailAdr: string = "";
  password: string = "";
  loginResponse: string;

  constructor(private route: Router, private http: HttpClient) {
  }
  ngOnInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => container.classList.add('right-panel-active')
    );
    signInButton.addEventListener('click', () => container.classList.remove('right-panel-active')
    );

    var body = document.body;

    signUpButton.addEventListener('click', function (e) {
      body.className = body.className ? '' : 'with_nav';
      e.preventDefault();
    });




  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }
  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage.imageAsBase64);
    //this.pictureTaken.emit(webcamImage);
    //this.webcamImage = webcamImage
    //img.crossOrigin = 'Anonymous';
    //img.src = webcamImage;
    var fd = new FormData();
    fd.append('imageFile', webcamImage.imageAsBase64);
    fd.append('userId', this.username);
    this.http.post<any>('http://localhost:8080/ca/facialRecognition', fd).subscribe(data => {
      this.loginResponse = data.message;
      if (this.loginResponse == 'Facial Recognition Successful') {
        alert(this.loginResponse)
        this.route.navigate(['exammenu']);
      } else {
        alert(this.loginResponse)
      }
    })
  }
  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  onSelectFile(event) {
    console.log("login" + event.target.files[0]);
    this.file = event.target.files[0]
  }
  onSelectSignupFile(event) {
    console.log("signupfile" + event.target.files[0]);
    this.signupFile = event.target.files[0]
  }
  signup() {
    var fd = new FormData();
    fd.append('imageFile', this.signupFile);
    fd.append('userId', this.emailAdr);
    fd.append('password', this.password);
    this.http.post<any>('http://localhost:8080/ca/register', fd).subscribe(data => {
      this.loginResponse = data.message;
      alert(this.loginResponse);
      window.location.reload();
    })

  }
  login() {
  }
}
