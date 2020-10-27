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

@Injectable()
export class Effects {
    constructor(private actions$: Actions, private auth: AngularFireAuth, private store: Store<State>) {

    }
    // loadRequestEffect$ = createEffect(() => this.actions$.pipe(
    //     ofType(ActionTypes.LOGIN_REQUEST),
    //     mergeMap(() => this.auth.user.pipe(
    //         map(user => {
    //             const xUser = {
    //                 uid: user.uid,
    //                 displayName: user.displayName
    //             };
    //             return new LoginSuccessAction({user: xUser});
    //         }),
    //         catchError(() => EMPTY)
    //     ))
    // ));

    // getUser$ = createEffect(() => this.actions$.pipe(
    //     ofType(ActionTypes.LOGIN_SUCCESS),
    // ))
    loadLoginRequest$ = createEffect(() => this.actions$.pipe(
        ofType(ActionTypes.LOGIN_REQUEST),
        withLatestFrom(this.store.select(selectAuthStateModel)),
        switchMap((lastAuthState) => {
            if (lastAuthState) {
                console.log('Last AuthState', lastAuthState);
            }

            return this.auth.signInWithPopup(new authx.GoogleAuthProvider()).then(
                userCred => {
                    console.log('User cred', userCred);
                    return new LoginSuccessAction({user: userCred.user});
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
            mergeMap(() => {
                return this.auth.signOut().then(r => {
                    return new LogoutSuccessAction();
                });
            })
        );
    });
}
