import { Component, OnInit } from '@angular/core';
import {SignInBegin,SignOutBegin, CloseDbSocketBegin} from "../../../state-management/actions/main.actions";
import {GlobalState} from "../../../state-management/states/global.state";
import {Store} from "@ngrx/store";
import {getMainState} from "../../../state-management/selectors/main.selectors";

@Component({
  selector: 'app-buttons-container',
  templateUrl: './buttons-container.s.component.html',
  styleUrls: ['./buttons-container.s.component.css']
})
export class ButtonsContainerComponent implements OnInit {

  isAuthenticated:boolean = false;
  adjectiveForJim:string = "--";

  constructor(private store:Store<GlobalState>) {
  }

  ngOnInit() {

    this.store.select(getMainState)
      .subscribe((data:any)=> {
        this.adjectiveForJim = data.adjectiveForJim;
        this.isAuthenticated = data.isAuthenticated;
      })
  }

  signIn($event) {
    console.log('sign in clicked!');
    this.store.dispatch(new SignInBegin());
  }

  signOutBadly($event) {
    console.log('sign out badly clicked!');
    this.store.dispatch(new SignOutBegin());
  }

  signOut($event) {
    console.log('sign out clicked!')
    this.store.dispatch(new CloseDbSocketBegin());
  }

}
