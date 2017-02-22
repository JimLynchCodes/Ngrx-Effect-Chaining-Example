import {Effect, Actions, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MainActionTypes, SignInSuccess, OpenDbSocketBegin} from "../actions/main.actions";
import {AngularFire} from "angularfire2";
import {mergeMap} from "rxjs/operator/mergeMap";
import {switchMap} from "rxjs/operator/switchMap";

@Injectable()
export class MainEffects {

  private dbSocket:any = this.af.database.object('/cypherapp/users/Jim');


  constructor(private action$: Actions, private af:AngularFire) {

  //Cancel
  // this.dbSocket.$ref.off();
  }

  @Effect() increment$ = this.action$
    .ofType(MainActionTypes.INCREMENT)
    .switchMap( () =>
      Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"})
    );

  @Effect() signIn$ = this.action$
    .ofType(MainActionTypes.SIGN_IN_BEGIN)
    .switchMap( () =>
      Observable.of(new SignInSuccess({}))
    );

  @Effect() signInToDbSocketOpenChain$ = this.action$
    .ofType(MainActionTypes.SIGN_IN_SUCCESS)
    .switchMap( () =>
      Observable.of(new OpenDbSocketBegin({name:"Jim"}))
    );

  @Effect() dbOpenSocket$ = this.action$
    .ofType(MainActionTypes.OPEN_DB_SOCKET_BEGIN)
    .switchMap( () =>
      this.dbSocket
        .switchMap ( payload => {

      return Observable.of({type: MainActionTypes.OPEN_DB_SOCKET_SUCCESS})
      })

    );


}
