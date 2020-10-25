import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-videojs',
  templateUrl: './videojs.component.html',
  styleUrls: ['./videojs.component.scss']
})
export class VideojsComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('videojs', {static: true}) target: ElementRef;
  @Input()
  id: string = 'mytube-video-0';

  @Input() videoId: string;

  @Input() height: number = 264;
  @Input() width: number = 500;

  @Input() options: any;
  // @Input() options: {
  //   fluid?: boolean,
  //   aspectRatio?: string,
  //   techOrder: string[],
  //   controls?: boolean,
  //   autoplay?: boolean,
  //   sources?: {
  //     src: string,
  //     type: string,
  //   }[],
  // };
  player: videojs.Player;
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.options = {
      autoplay: true,
      controls: true,
      techOrder: ["youtube"],
      sources: [
        {
          type: "video/youtube",
          src: "https://www.youtube.com/watch?v=MM4WoH8jwLY"
        }
      ],
      youtube: {
        customVars: {wmode: "transparent"},
        ytControls: 0
      }
    }
    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });

  }
  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('VideoJS changed', changes);

  }

}
