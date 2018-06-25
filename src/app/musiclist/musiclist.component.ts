import { Component, OnInit } from '@angular/core';
import { MusiclistService } from './../musiclist.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Music } from '../music';
@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {

  musicList: Music[];
  constructor(private musicListService: MusiclistService) { }
  ngOnInit() {
    this.getMusic();
  }
  getMusic(): void {
    this.musicListService.getList().subscribe((musicList) => {
      this.musicList = musicList;
    });
  }
  play(music: string) {
    const music_: Music = {
      musicname: music
    };
    this.musicListService.send(music_).subscribe((music__) => {
   //   console.log(music_);
    });
  }
}
