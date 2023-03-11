import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";

import * as fromApplicationActions from "./application.actions";
import {tap} from "rxjs";

@Injectable()
export class ApplicationEffects {

  constructor(private actions$: Actions,
              private router: Router) {
  }

  selectRoom$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromApplicationActions.SELECT_ROOM),
      tap((action: fromApplicationActions.SelectRoomAction) => {
        if (action.room != null)
          this.router.navigate(['../create-application']);
      })
    )
  }, {dispatch: false});

}
