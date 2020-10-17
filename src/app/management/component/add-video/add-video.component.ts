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
      videoUrl: [[], null],
      videoTitle: [[], null],
      thumbnailUrl: [[], null],
      notes: [[], null],
      myNotes: [[], null],
      notesAuthor: [[], null],
      addedDate: [[], null],
    });
  }

  ngOnInit(): void {
  }

  save() {
    const object = {
      videoId: this.addVideoForm.get('videoId')!.value,
      videoUrl: this.addVideoForm.get('videoUrl')!.value,
      videoTitle: this.addVideoForm.get('videoTitle')!.value,
      thumbnailUrl: this.addVideoForm.get('thumbnailUrl')!.value,
      notes: this.addVideoForm.get('notes')!.value,
      myNotes: this.addVideoForm.get('myNotes')!.value,
      notesAuthor: this.addVideoForm.get('notesAuthor')!.value,
      addedDate: Date.now()
    };
    const itemRef = this.db.list('MyFavoriteYoutubeVideos');
    itemRef.push(object);
  }
}
