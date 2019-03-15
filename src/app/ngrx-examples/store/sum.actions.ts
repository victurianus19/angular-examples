import { Action } from '@ngrx/store';

export interface Sum {
  num1: number;
  num2: number;
}

export const SET_OPERATION = '[Operation] Sum';

export class SetSumAction implements Action {
  readonly type = SET_OPERATION;

  constructor(public sum: Sum) {}
}

export type actions = SetSumAction;
