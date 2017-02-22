import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MainEffects} from "./state-management/effects/main.effects";
import {EffectsModule} from "@ngrx/effects";
import { ButtonsContainerComponent } from './routes/main/buttons-container/buttons-container.component';
import { ButtonsComponent } from './routes/main/buttons/buttons/buttons.d.component';
import {StoreModule} from "@ngrx/store";
import {mainStoreReducer} from "./state-management/reducers/main.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AngularFireModule} from "angularfire2/angularfire2";
import {AuthProviders, AuthMethods, firebaseAuthConfig} from "angularfire2/index";


export const firebaseConfig = {
  apiKey: "AIzaSyDwCrWWdMH0nu9y7Dz6gxK0RPXsheO5KeA",
  authDomain: "qa-cypherapp.firebaseapp.com",
  databaseURL: "https://qa-cypherapp.firebaseio.com",
  storageBucket: "qa-cypherapp.appspot.com",
  messagingSenderId: "78542650498"

};


@NgModule({
  declarations: [
    AppComponent,
    ButtonsContainerComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({mainStoreReducer:mainStoreReducer}),
    EffectsModule.run(MainEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AngularFireModule.initializeApp(firebaseConfig, {
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    })

  ],
  providers: [],
  bootstrap: [AppComponent,
   ]
})
export class AppModule { }
