import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementComponent } from './management.component';
import { AddVideoComponent } from './component/add-video/add-video.component';
import {SharedModule} from "../shared/shared.module";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ListVideoComponent } from './component/list-video/list-video.component';


@NgModule({
  declarations: [ManagementComponent, AddVideoComponent, ListVideoComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ManagementModule { }
