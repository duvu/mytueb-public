import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import {LoginComponent} from "./component/login/login.component";

const routes: Routes = [
    { path: '', redirectTo: 'c/login', pathMatch: 'full'},
    { path: 'c', component: AccountComponent,
      children: [
        { path: 'login', component: LoginComponent},
      ]
    },
    { path: '**', redirectTo: 'c/login', pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
