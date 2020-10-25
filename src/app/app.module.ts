import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import {SharedModule} from "./shared/shared.module";
import {AngularFireModule} from "@angular/fire";
import {FlexLayoutModule} from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './stores/root.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RootModule} from "./stores/root.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot({}),
    RootModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
