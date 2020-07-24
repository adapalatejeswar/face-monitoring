import { Component, OnInit, EventEmitter } from '@angular/core';
import {Router} from  '@angular/router';
// 1 added new for monitoring - starts//
import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as io from 'socket.io-client';
//import { MessageService } from './message.service';

// 1 added new for monitoring - ends//

@Component({
  selector: 'app-invpage',
  templateUrl: './invpage.component.html',
  styleUrls: ['./invpage.component.scss']
})
export class InvpageComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { } //2 added for HTTPClient
  socket = io.connect('http://localhost:5000')
  public errstring:any;
  public outimg : string = '';
  public intervalHandle: any;


  public ngOnInit(): void {
    this.socket.on('image_out', (message) => {
      this.outimg = "data:image/png;base64,"+message;
    })
    this.socketmonitor();

  };
  public socketmonitor(): void {
    this.socket.on('AnomalyMsg', (message) => {
      console.log(message);
      if (message === "NoPerson")
      {
        alert("There is no person available before the screen");

      }
    })
    this.intervalHandle = setInterval(() => {
      this.socket.emit('message', 'Hello');
    }, 100);
}


public freeze(): void{
  this.socket.emit('freeze', 'freeze');
}

public unfreeze(): void{
  this.socket.emit('unfreeze', 'unfreeze');
}

public disconnect(): void{
  console.log('disconnectall');
  this.socket.emit('disconnect');
  this.socket.disconnect();
}

}
