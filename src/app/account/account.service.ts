import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public auth: AngularFireAuth) {

  }
}
