import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management.component';
import {AddVideoComponent} from "./component/add-video/add-video.component";
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {ListVideoComponent} from "./component/list-video/list-video.component";

const routes: Routes = [
    { path: '', redirectTo: 'c/add-video', pathMatch: 'full' },
    { path: 'c', component: ManagementComponent, canActivate: [AngularFireAuthGuard],
      children: [
        { path: 'add-video', component: AddVideoComponent, pathMatch: 'full' },
        { path: 'list', component: ListVideoComponent, pathMatch: 'full' },
      ]
    },
    { path: '**', redirectTo: 'c/add-video', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
