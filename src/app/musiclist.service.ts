import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Music } from './music';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class MusiclistService {
  musiclist = '/api/musicLists';
  playmusic = '/api/playmusic';
  private socket: SocketIOClient.Socket;
  constructor(private http: HttpClient) {
  }
  getList(): Observable<Music[]> {
    return this.http.get<Music[]>(this.musiclist);
  }
  send(music: Music): Observable<Music> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })};
    console.log(music);
    return this.http.post<Music>(this.playmusic, music, httpOptions);
  }
}
