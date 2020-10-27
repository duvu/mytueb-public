import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AngularFireAuth} from "@angular/fire/auth";
import {ActionTypes, LoginFailureAction, LoginSuccessAction, LogoutSuccessAction} from "./actions";
import {catchError, map, mergeMap, switchMap, withLatestFrom} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {auth as authx, User} from "firebase";
import {Store} from "@ngrx/store";
import {selectAuthStateModel} from "./selectors";
import {State} from "./state";
import {XUser} from "../../models/x-user";

@Injectable()
export class Effects {
    constructor(private actions$: Actions,
                private auth: AngularFireAuth,
                private store: Store<State>) {}

    loadLoginRequest$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.LOGIN_REQUEST),
        switchMap(() => {
            return this.auth.signInWithPopup(new authx.GoogleAuthProvider()).then(
                userCred => {
                    const xUser = {
                        uid: userCred.user.uid,
                        displayName: userCred.user.displayName
                    } as XUser;
                    return new LoginSuccessAction({user: xUser});
                },
                (reason => {
                    return new LoginFailureAction(reason);
                })
            );
        })
    ));

    executeLogoutRequest$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ActionTypes.LOGOUT_REQUEST),
            switchMap(() => {
                return this.auth.signOut().then(r => {
                    return new LogoutSuccessAction();
                });
            })
        );
    });

    // loadLoginSuccess$ = createEffect(() => this.actions$.pipe(
    //     ofType(ActionTypes.LOGIN_SUCCESS),
    //     mergeMap(() => {
    //         return
    //     })
    // ))
}
