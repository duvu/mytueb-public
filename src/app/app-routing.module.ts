import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
    { path: '', redirectTo: 'youtube', pathMatch: 'full' },
    { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
    { path: 'man', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule) },
    { path: 'about', component: AboutComponent, pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
