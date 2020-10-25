import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {RootFacade} from "../../stores/root.facade";
import {auth as authx} from "firebase";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public auth: AngularFireAuth,
              private router: Router,
              private facade: RootFacade) {

  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.signOut().finally(() => {
      console.log('Logged Out');
      this.facade.setAuthState(false);
    });

  }

  login() {
    this.auth.signInWithPopup(new authx.GoogleAuthProvider());
    this.auth.user.subscribe(data => {
      console.log('logged in');
      this.facade.setAuthState(true);
    });
  }


  addCategory() {

  }
}
