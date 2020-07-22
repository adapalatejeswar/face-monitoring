import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-invpage',
  templateUrl: './invpage.component.html',
  styleUrls: ['./invpage.component.scss']
})
export class InvpageComponent implements OnInit {
  public socket: any;
  public outimg : string = '';

  constructor(private router: Router, private http: HttpClient) {
    this.socket = io('http://localhost:5000', { transports: ['polling'] })
  }

  public ngOnInit(): void { 
    this.socket.on('image_out', (message) => {
      this.outimg = "data:image/png;base64,"+message;
    })
  }

  public disconnectall(): void {
    console.log('disconnectall');
    this.socket.emit('disconnect');
    this.socket.disconnect();
  }

}
