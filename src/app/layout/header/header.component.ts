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
  user: XUser;
  authState$ = this.store.select(selectAuthStateModel);

  constructor(public auth: AngularFireAuth,
              private router: Router,
              private store: Store<{}>) {
    this.authState$.subscribe(data => {
      console.log('Header', data);
      this.user = data.user;
    });
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
  }


  addCategory() {

  }
}
