import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './component/login/login.component';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../../environments/environment";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [AccountComponent, LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SharedModule
  ]
})
export class AccountModule { }
