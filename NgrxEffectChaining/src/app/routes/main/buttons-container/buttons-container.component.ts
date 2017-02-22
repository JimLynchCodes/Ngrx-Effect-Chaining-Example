import { Component, OnInit } from '@angular/core';
import {Increment, MainActions, MainActionTypes, SignInBegin} from "../../../state-management/actions/main.actions";
import {GlobalState} from "../../../state-management/states/global.state";
import {Store} from "@ngrx/store";
// import * as from mainActionsMainActions;

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.component.html',
  styleUrls: ['./buttons-container.component.css']
})
export class ButtonsContainerComponent implements OnInit {

  constructor(private store:Store<GlobalState>) {

  }

  ngOnInit() {
    console.log('hi') ;

    this.store.dispatch(new Increment({someProperty:'g', someOtherProperty:true}))
  }

  signOut($event) {
    console.log('sign out clicked!')
  }

  signIn ($event) {
    console.log('sign in clicked!');
    this.store.dispatch(new SignInBegin());

  }

}
