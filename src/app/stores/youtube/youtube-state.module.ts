import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {reducer, youtubeFeatureKey} from "./reducer";
import {EffectsModule} from "@ngrx/effects";
import {Effects} from "./effects";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(youtubeFeatureKey, reducer),
        EffectsModule.forFeature([Effects])
    ]
})
export class YoutubeStateModule {

}
