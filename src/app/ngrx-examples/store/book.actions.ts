import { Action } from '@ngrx/store';

export interface Book {
  id?: number;
  userEmail?: string;
  name?: string;
}

export interface User2 {
  email: string;
  pass?: string;
}

export const SET_BOOK = '[Book] Set Book';

export class SetBookAction implements Action {
  readonly type = SET_BOOK;

  constructor(public user: User2) {}
}

export type actions = SetBookAction;
