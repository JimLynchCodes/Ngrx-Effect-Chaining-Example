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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
