import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'youtube', pathMatch: 'full' },
    { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
    { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
    { path: 'man', loadChildren: () => import('./management/management.module').then(m => m.ManagementModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
