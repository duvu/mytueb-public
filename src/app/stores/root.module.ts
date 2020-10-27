import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AuthStateModule} from "./auth/auth-state.module";
import {YoutubeStateModule} from "./youtube/youtube-state.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AuthStateModule,
        YoutubeStateModule
    ]
})
export class RootModule {

}
