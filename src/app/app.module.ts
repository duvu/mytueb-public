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
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RootModule} from "./stores/root.module";
import {EffectsModule, EffectsRootModule} from "@ngrx/effects";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent
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
    EffectsModule.forRoot([]),
    RootModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
