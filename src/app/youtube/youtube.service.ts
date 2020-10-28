import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireAuth} from "@angular/fire/auth";
import {EMPTY, Observable, of} from "rxjs";
import {MyTubeVideo} from "../models/my-tube-video";
import {Store} from "@ngrx/store";

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {
    constructor(private db: AngularFireDatabase) {
    }

    getVideoList(uid: string | null): Observable<MyTubeVideo[]> {
        const dbRef = uid ? `MyFavoriteYoutubeVideos/${uid}` : 'MyFavoriteYoutubeVideos';
        return this.db.list<MyTubeVideo>(dbRef).valueChanges();
    }

    addVideo(uid: string | null, video: MyTubeVideo): Observable<any> {
        const itemRef = this.db.list('MyFavoriteYoutubeVideos/' + uid);
        itemRef.push(video);
        return of(EMPTY);
    }
}
