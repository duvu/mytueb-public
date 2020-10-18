import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import { findIndex } from 'lodash-es';
import {MyTubeVideo} from "../models/my-tube-video";
import {AngularFireAuth} from "@angular/fire/auth";

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
  iFrameElement: HTMLElement;
  dbRef: string;

  constructor(db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.dbRef = 'MyFavoriteYoutubeVideos';
    this.auth.user.subscribe(user => {
      if (user) {
        const uid = user.uid;
        this.dbRef += `/${uid}`;
      }

      db.list<MyTubeVideo>(this.dbRef).valueChanges().subscribe(
          (videoList: MyTubeVideo[]) => {
            this.videos = videoList;
            this.selected = videoList[0];
          }
      );
    });

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
    this.iFrameElement = this.player.getIframe();
    console.log('iFrame', this.iFrameElement);
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
