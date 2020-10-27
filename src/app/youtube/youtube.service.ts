import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable, of} from "rxjs";
import {MyTubeVideo} from "../models/my-tube-video";

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {
    dbRef: string;

    videos$: Observable<MyTubeVideo[]>;

    constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    }

    getVideoList(uid: string | null): Observable<MyTubeVideo[]> {
        this.dbRef = uid ? `MyFavoriteYoutubeVideos/${uid}` : 'MyFavoriteYoutubeVideos';
        return this.db.list<MyTubeVideo>(this.dbRef).valueChanges();
    }
}
