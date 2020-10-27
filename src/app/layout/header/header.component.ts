import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {XUser} from "../../models/x-user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  authState$ = this.store.select(selectAuthStateModel).pipe();

  constructor(public auth: AngularFireAuth,
              private router: Router,
              private store: Store<{}>) {

  }

  ngOnDestroy(): void {

    }

  ngOnInit(): void {
  }

  logout() {
    // return this.auth.signOut();
    this.store.dispatch(new LogoutRequestAction());
  }

  login() {
    this.store.dispatch(new LoginRequestAction());
    // return this.auth.signInWithPopup(new authx.GoogleAuthProvider()).then(
    //     userCred => {
    //       const xUser = {
    //         uid: userCred.user.uid,
    //         displayName: userCred.user.displayName
    //       } as XUser;
    //       this.store.dispatch(new LoginSuccessAction({user: xUser}));
    //       console.log('User cred', userCred);
    //     },
    //     (reason => {
    //       this.store.dispatch( new LoginFailureAction(reason));
    //     })
    // );
  }


  addCategory() {

  }
}
