import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import * as fromAuth from '../store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthEffects {
  constructor(private http: HttpClient, private actions$: Actions) {}
  // Listen for the Login action
  @Effect()
  searchUser$: Observable<Action> = this.actions$.pipe(
    ofType(fromAuth.LOAD_AUTH),
    switchMap(() => {
      return this.http
        .get(`https://api.github.com/search/users?q=mojombo`)
        .pipe(
          pluck('items'),
          map(user => {
            console.log(user[0].login);
            return new fromAuth.SetAuthAction(user[0]);
          })
        );
    })
  );
}
