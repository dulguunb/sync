import { Component, OnInit } from '@angular/core';
import { MusiclistService } from './../musiclist.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Music } from '../music';
import { WebSocketService } from '../web-socket.service';
import { Howl } from 'howler';
@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {
  musicList: Music[];
  constructor(private musicListService: MusiclistService,
              private webSocketService: WebSocketService) {
  }
  ngOnInit() {
    this.getMusic();
    this.connectSocket();
  }
  getMusic(): void {
    this.musicListService.getList().subscribe((musicList) => {
      this.musicList = musicList;
    });
  }
  connectSocket(): void {
      this.webSocketService.init();
  }
  play(music: string) {
    const music_: Music = {
      musicname: music
    };
    const sound = new Howl({
      src: ['assets/database/' + music]
    });
    sound.play();
    this.musicListService.send(music_).subscribe((music__) => {
     console.log(music_);
    });
  }
}
