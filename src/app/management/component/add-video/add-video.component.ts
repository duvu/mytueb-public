import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  addVideoForm: FormGroup;
  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    this.addVideoForm = this.fb.group({
      videoId: [[], null],
    });
  }

  ngOnInit(): void {
  }

  save() {
    const object = {
      // tslint:disable-next-line:no-non-null-assertion
      videoId: this.addVideoForm.get('videoId')!.value
    };
    const itemRef = this.db.list('MyFavoriteYoutubeVideos');
    itemRef.push(object);
  }
}
