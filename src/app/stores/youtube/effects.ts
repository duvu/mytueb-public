import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AngularFireAuth} from "@angular/fire/auth";
import {ActionTypes, LoadVideosRequestAction, LoadVideosSuccessAction} from "./actions";
import {map, switchMap} from "rxjs/operators";
import {YoutubeService} from "../../youtube/youtube.service";



@Injectable()
export class Effects {
  constructor(private actions$: Actions,
              private youtubeService: YoutubeService,
              private auth: AngularFireAuth) {}

      loadVideoRequest = createEffect(() => this.actions$.pipe(
          ofType(ActionTypes.LOAD_VIDEOS_REQUEST),
          switchMap((action: LoadVideosRequestAction) => {
            console.log('Action', action);
            const uid = action.payload.uid;
            return this.youtubeService.getVideoList(uid).pipe(
                map(videoList => {
                  return new LoadVideosSuccessAction({videos: videoList});
                })
            );
          })
      ));
}
