import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-videojs',
  templateUrl: './videojs.component.html',
  styleUrls: ['./videojs.component.scss']
})
export class VideojsComponent implements OnInit {

  @Input()
  id: string = 'mytube-video-0';

  @Input() videoId: string;

  @Input() height: number = 264;
  @Input() width: number = 500;
  data: string;

  constructor() { }

  ngOnInit(): void {
  }

}
