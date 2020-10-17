import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import { findIndex } from 'lodash-es';
import {MyTubeVideo} from "../models/my-tube-video";
import {$e} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  private apiLoaded = false;
  videos: MyTubeVideo[];
  selected: MyTubeVideo;
  player: YT.Player;


  constructor(db: AngularFireDatabase) {
    db.list<MyTubeVideo>('MyFavoriteYoutubeVideos').valueChanges().subscribe(
        (videoList: MyTubeVideo[]) => {
          this.videos = videoList;
          this.selected = videoList[0];
        }
    );
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

  onPlayerReady($event: YT.PlayerEvent) {
    this.player = $event.target;
    this.play();
  }

  selectVideo(item: MyTubeVideo) {
    this.selected = item;
    this.play();
  }


  play(video?: MyTubeVideo) {
    if (video) {
      this.selected = video;
    }

    setTimeout(() => {
      if (this.player) {
        this.player.playVideo();
      }
    }, 10);
  }

  onChanges($event: any) {
    if ($event.data === 0) {
      this.selected = this.next();
      this.play();
    }
  }

  next(): MyTubeVideo {
    const videoId = this.selected?.videoId;
    let idx = findIndex(this.videos, o => o.videoId === videoId);
    if (idx === this.videos.length - 1) {
      idx = -1;
    }
    return this.videos[idx + 1];
  }
}
