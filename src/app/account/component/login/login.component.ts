import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { auth as authx } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth) {
  }

  ngOnInit(): void {
  }
  login() {
    this.auth.signInWithPopup(new authx.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

}