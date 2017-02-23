import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {AppComponent} from './app.component';
import {MainEffects} from "./state-management/effects/main.effects";
import {EffectsModule} from "@ngrx/effects";
import {ButtonsContainerComponent} from './routes/main/buttons-container/buttons-container.s.component.ts';
import {ButtonsComponent} from './routes/main/buttons/buttons/buttons.d.component';
import {StoreModule} from "@ngrx/store";
import {mainStoreReducer} from "./state-management/reducers/main.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AngularFireModule} from "angularfire2/angularfire2";
import {AuthProviders, AuthMethods, firebaseAuthConfig} from "angularfire2/index";

export const firebaseConfig = {
  apiKey: "AIzaSyC7ndmL9lFiIwoB_aDRsEZ_T4YEXjEKwm4",
  authDomain: "chaining-effects-ngrx.firebaseapp.com",
  databaseURL: "https://chaining-effects-ngrx.firebaseio.com",
  storageBucket: "chaining-effects-ngrx.appspot.com",
  messagingSenderId: "118259013468"
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
    [MaterialModule],
    StoreModule.provideStore({mainState: mainStoreReducer}),
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
export class AppModule {
}
