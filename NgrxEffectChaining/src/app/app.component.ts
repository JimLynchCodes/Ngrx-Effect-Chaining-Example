import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {GlobalState} from "./state-management/states/global.state";
import {MainActions, Increment} from "./state-management/actions/main.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'

}
