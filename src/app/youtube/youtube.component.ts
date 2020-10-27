import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import { findIndex } from 'lodash-es';
import {MyTubeVideo} from "../models/my-tube-video";
import {AngularFireAuth} from "@angular/fire/auth";
import {YoutubeService} from "./youtube.service";
import {Store} from "@ngrx/store";
import {LoadUserRequestAction, LoginRequestAction} from "../stores/auth/actions";
import {selectAuthStateModel} from "../stores/auth/selectors";
import {selectYoutubeStateModel} from "../stores/youtube/selectors";
import {LoadVideosRequestAction} from "../stores/youtube/actions";
import {LoadingService} from "../shared/loading.service";

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit, OnDestroy {
  private apiLoaded = false;
  videos: MyTubeVideo[];
  selected: MyTubeVideo;
  player: YT.Player;
  iFrameElement: HTMLElement;
  dbRef: string;

  // authState$ = this.store.select(selectAuthStateModel);
  youtubeState$ = this.store.select(selectYoutubeStateModel);

  constructor(private loadingService: LoadingService, private store: Store<{}>) {
    this.youtubeState$.subscribe(data => {
      console.log('Youtube state', data);
      this.videos = data.videos;
      this.selected = this.videos ? this.videos[0] : null;

      if (data.isLoading) {
        loadingService.show();
      } else {
        loadingService.hide();
      }
    });
  }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.id = 'youtube-id';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.store.dispatch(new LoadUserRequestAction());
  }

  onPlayerReady($event: YT.PlayerEvent) {
    this.player = $event.target;
    this.iFrameElement = this.player.getIframe();
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

  ngOnDestroy(): void {
    console.log('destroying ...');
    const  el = document.getElementById('youtube-id');
    document.body.removeChild(el);
  }
}
