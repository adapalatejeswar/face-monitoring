import { Component, OnInit, EventEmitter } from '@angular/core';
import {Router} from  '@angular/router';
// 1 added new for monitoring - starts//
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';

// 1 added new for monitoring - ends//

@Component({
  selector: 'app-invpage',
  templateUrl: './invpage.component.html',
  styleUrls: ['./invpage.component.scss']
})
export class InvpageComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { } //2 added for HTTPClient
  socket = io.connect('http://localhost:5000')
  //public intervalHandle: any;


  public ngOnInit(): void{
      //this.socketlisten();
      //this.socket.connect()
      //this.socket.nsp = '/invpage'
    //   this.socket.on('message_out', function(message) {
    //   console.log(message);
    //  })
    
}


// public socketlisten(): void{
//   // this.imagestr =  this.webcamImage;
//    this.intervalHandle = 
//    setInterval(() => {
//      this.socket.on('message_out', function(message) {
//       console.log(message);
//      })
//  }, 40);
//    };

public disconnectall(): void{
  console.log('disconnectall');
  this.socket.emit('disconnect');
  this.socket.disconnect();

}

}
