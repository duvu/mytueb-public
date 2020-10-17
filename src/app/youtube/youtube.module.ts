import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import {FlexModule} from "@angular/flex-layout";


@NgModule({
  declarations: [YoutubeComponent],
    imports: [
        CommonModule,
        YoutubeRoutingModule,
        YouTubePlayerModule,
        FlexModule
    ]
})
export class YoutubeModule { }
