import { Injectable } from '@angular/core';
import { AnyAction } from 'redux';
import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';

const fetchListFulfilled = payload => ({
    type: UserActions.FETCH_LIST_FULFILLED,
    todos: payload
  });

export const epic = (action$) =>
  action$.pipe(ofType(UserActions.FETCH_LIST),
    mergeMap(action =>
      ajax.getJSON('https://www.mocky.io/v2/5a421404300000fe0c709d12') // Our API
        .pipe(map(response => fetchListFulfilled(response)))
    ));

@Injectable()
export class UserActions {
  static ADD_TODO = 'ADD_TODO';
  static REMOVE_TODO = 'REMOVE_TODO';
  static FETCH_LIST = 'FETCH_LIST';
  static FETCH_LIST_FULFILLED = 'FETCH_LIST_FULFILLED';

  fetchList() {
    return { type: UserActions.FETCH_LIST };
  }
  addTodo(name: string, description: string): AnyAction {
    return { type: UserActions.ADD_TODO, name, description, date: new Date()};
  }
  removeTodo(index: number): AnyAction {
    return { type: UserActions.REMOVE_TODO, index };
  }
}
