import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { auth as authx } from 'firebase/app';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
  }
  login() {
    this.auth.signInWithPopup(new authx.GoogleAuthProvider());
    this.auth.user.subscribe(data => {
      if (data) {
        this.router.navigate(['/man']);
      }
    });
  }
}
