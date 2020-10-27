import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {
  LoginFailureAction,
  LoginRequestAction,
  LoginSuccessAction,
  LogoutRequestAction, LogoutSuccessAction
} from "../../stores/auth/actions";
import {selectAuthStateModel} from "../../stores/auth/selectors";
import {XUser} from "../../models/x-user";
import {LoadingService} from "../../shared/loading.service";
import {MatDialog} from "@angular/material/dialog";
import {AddVideoComponent} from "../../shared/component/add-video/add-video.component";
import {AddCategoryComponent} from "../../shared/component/add-category/add-category.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: XUser;
  authState$ = this.store.select(selectAuthStateModel);

  constructor(private loadingService: LoadingService, private store: Store<{}>, private dialog: MatDialog) {

    this.authState$.subscribe(data => {
      console.log('Header', data);
      this.user = data.user;
      if (data.isLoading) {
        loadingService.show();
      } else {
        loadingService.hide();
      }
    });
  }

  ngOnDestroy(): void {

    }

  ngOnInit(): void {
  }

  logout() {
    this.store.dispatch(new LogoutRequestAction());
  }

  login() {
    this.store.dispatch(new LoginRequestAction());
  }

  addCategory() {
    this.dialog.open(AddCategoryComponent, {
      width: '500px'
    });
  }

  addVideo() {
    this.dialog.open(AddVideoComponent, {
      width: '500px'
    });
  }
}
