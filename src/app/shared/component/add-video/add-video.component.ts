import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireAuth} from "@angular/fire/auth";
import {MyTubeVideo} from "../../../models/my-tube-video";
import getYouTubeID from 'get-youtube-id';
import * as getYouTubeTitle from 'get-youtube-title';
import {Store} from "@ngrx/store";
import {AddVideoRequestAction} from "../../../stores/youtube/actions";

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  addVideoForm: FormGroup;

  videoObj: MyTubeVideo = {} as MyTubeVideo;

  constructor(private fb: FormBuilder,
              private store: Store<{}>,
              private db: AngularFireDatabase,
              public auth: AngularFireAuth) {
    this.addVideoForm = this.fb.group({
      videoId: [{value: '', disabled: true }],
      videoUrl: [[], null],
      videoTitle: [{value: '', disabled: true }],
      thumbnailUrl: [{value: '', disabled: true }],
      notes: [[], null],
      myNotes: [[], null],
      notesAuthor: [[], null],
      addedDate: [[], null],
    });
  }

  ngOnInit(): void {
    this.addVideoForm.controls.videoUrl.valueChanges.subscribe( url => {
      const videoId = getYouTubeID(url);
      this.videoObj.videoId = videoId
      this.videoObj.thumbnailUrl = `https://img.youtube.com/vi/${videoId}/1.jpg`;

      getYouTubeTitle(videoId, 'AIzaSyBgG4RbPTD4-MiPKM4pZBjrchkyAbr8NEE', (err, title) => {
        if (title) {
          this.addVideoForm.controls.videoTitle.setValue(title);
        }
      });
    });
  }

  save() {
    console.log('Start saving ...');
    this.videoObj.videoUrl = this.addVideoForm.get('videoUrl')!.value;
    this.videoObj.videoTitle = this.addVideoForm.get('videoTitle')!.value;
    this.videoObj.notes = this.addVideoForm.get('notes')!.value;
    this.videoObj.myNotes = this.addVideoForm.get('myNotes')!.value;
    this.videoObj.notesAuthor = this.addVideoForm.get('notesAuthor')!.value;
    this.videoObj.addedDate = Date.now();
    console.log('Object #', this.videoObj);
    this.store.dispatch(new AddVideoRequestAction({video: this.videoObj}));
  }

  cancel() {
  }
}
