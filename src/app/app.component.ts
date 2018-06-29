import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private websocket: WebSocketService) { }

  ngOnInit() {
    this.websocket.init().subscribe(msg => {
      console.log(msg);
    });
  }
}
