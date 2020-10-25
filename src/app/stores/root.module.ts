import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {ROOT_FEATURE_KEY,  initialState as rootInitialState,
    reducers} from './root.reducer';

export function getInitialState() {
    return rootInitialState;
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature(ROOT_FEATURE_KEY, reducers, {initialState: getInitialState}),
    ]
})
export class RootModule {

}
