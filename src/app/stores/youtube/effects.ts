import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
    ActionTypes,
    AddVideoSuccessAction,
    LoadVideosRequestAction,
    LoadVideosSuccessAction
} from "./actions";
import {map, switchMap, withLatestFrom} from "rxjs/operators";
import {YoutubeService} from "../../youtube/youtube.service";
import {Store} from "@ngrx/store";
import {selectAuthUser} from "../auth/selectors";


@Injectable()
export class Effects {
    user$ = this.store.select(selectAuthUser)
  constructor(private actions$: Actions,
              private youtubeService: YoutubeService,
              private store: Store<{}>) {}

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

    addVideoRequest$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.ADD_VIDEO_REQUEST),
        withLatestFrom(this.user$),
        switchMap(([action, userx]) => {
            console.log('Action', action, userx);
            // @ts-ignore
            return this.youtubeService.addVideo(userx.uid, action.payload.video).pipe(
                map(() => {
                    return new AddVideoSuccessAction();
                })
            );
        })
    ));
}
