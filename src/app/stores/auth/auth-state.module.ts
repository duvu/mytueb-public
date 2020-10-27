import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {authFeatureKey, reducer} from "./reducer";
import {initialState as authInitialState} from "./state";
import {EffectsModule} from "@ngrx/effects";
import {Effects} from "./effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([Effects])
  ]
})
export class AuthStateModule { }
