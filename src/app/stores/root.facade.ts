import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {RootPartialState} from "./root.reducer";
import {rootQuery} from "./root.selectors";
import {AuthActions} from "./auth";

@Injectable({
    providedIn: 'root'
})
export class RootFacade {
    authState$ = this.store.pipe(select(rootQuery.getAuthenticate));

    constructor(private store: Store<RootPartialState>) {
    }

    setAuthState(isAuthenticated: boolean) {
        console.log('setAuthState', isAuthenticated);
        if (isAuthenticated) {
            return this.store.dispatch(AuthActions.logInAuth());
        } else {
            return this.store.dispatch(AuthActions.logOUtAuth());
        }
    }
}
