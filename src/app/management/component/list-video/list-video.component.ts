import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MyTubeVideo} from "../../../models/my-tube-video";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-list-video',
  templateUrl: './list-video.component.html',
  styleUrls: ['./list-video.component.scss']
})
export class ListVideoComponent implements OnInit, AfterViewInit {
  data: Observable<any[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  resultsLength = 0;
  isLoadingResults = true;
  $uid: string;
  displayedColumns: string[] = [
    'videoId',
    'videoTitle',
    'thumbnailUrl',
    'notes',
    'myNotes',
    'notesAuthor',
    'addedDate',
    'actions'
  ];

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.auth.user.subscribe(user => {
      this.$uid = user.uid;
      this.data = this.db.list<any>('MyFavoriteYoutubeVideos/'  + this.$uid).snapshotChanges();
    });
  }

  remove(row: any) {
    console.log('Removing', row);
    console.log('Removing', row.key);
    this.db.list<MyTubeVideo>('MyFavoriteYoutubeVideos/'  + this.$uid).remove(row.key);
  }
}
