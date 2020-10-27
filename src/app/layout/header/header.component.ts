import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Observable} from "rxjs";
import {auth as authx, User} from "firebase";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {
  LoginFailureAction,
  LoginRequestAction,
  LoginSuccessAction,
  LogoutRequestAction, LogoutSuccessAction
} from "../../stores/auth/actions";
import {selectAuthStateModel} from "../../stores/auth/selectors";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  authState$ = this.store.select(selectAuthStateModel);

  constructor(public auth: AngularFireAuth,
              private router: Router,
              private store: Store<{}>) {

  }

  ngOnInit(): void {
    this.authState$.subscribe(data => console.log('XData', data));
  }

  logout() {
    return this.auth.signOut().then(r => {
      this.store.dispatch(new LogoutSuccessAction());
    });

  }

  login() {
    return this.auth.signInWithPopup(new authx.GoogleAuthProvider()).then(
        userCred => {
          console.log('User cred', userCred);
          this.store.dispatch(new LoginSuccessAction({user: userCred.user}));
        },
        (reason => {
          this.store.dispatch( new LoginFailureAction(reason));
        })
    );
  }


  addCategory() {

  }
}
