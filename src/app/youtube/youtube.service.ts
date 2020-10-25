import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable, of} from "rxjs";
import {MyTubeVideo} from "../models/my-tube-video";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  dbRef: string;

  videos$: Observable<MyTubeVideo[]>;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
  }

  getVideoList(): Observable<MyTubeVideo[]> {
    this.dbRef = 'MyFavoriteYoutubeVideos';
    return this.auth.authState.pipe(
        switchMap(user => {
          if (user) {
            const uid = user.uid;
            this.dbRef += `/${uid}`;
          }
          return this.db.list<MyTubeVideo>(this.dbRef).valueChanges();
        })
    );
  }
}
