import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import * as Rx from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket;
  constructor() { }
  init(): Observable<string> {
    this.socket = io(environment.ws_url);
    return new Observable();
  }
}
