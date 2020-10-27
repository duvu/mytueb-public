import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import {SharedModule} from "../shared/shared.module";
import {RootModule} from "../stores/root.module";


@NgModule({
  declarations: [YoutubeComponent],
    imports: [
        CommonModule,
        YoutubeRoutingModule,
        YouTubePlayerModule,
        SharedModule,
        RootModule
    ]
})
export class YoutubeModule { }
