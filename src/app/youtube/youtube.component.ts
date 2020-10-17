import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  private apiLoaded = false;
  items: Observable<any[]>;
  selectedVideoId: string;
  selectedNotes: string;
  player: YT.Player;


  constructor(db: AngularFireDatabase) {
    this.items = db.list('MyFavoriteYoutubeVideos').valueChanges();
  }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  selectVideo(item: any) {
    this.selectedVideoId = item.videoId;
    this.selectedNotes = item.notes;
    this.play();
  }

  onPlayerReady($event: YT.PlayerEvent) {
    this.player = $event.target;
    this.play();
  }

  play() {
    if (this.player) {
      this.player.playVideo();
    }
  }
}
