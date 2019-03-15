import { createSelector } from '@ngrx/store';
import * as fromOperation from './sum.actions';

export interface OperationState {
  num1: number;
  num2: number;
}

const initialOperation = {
  num1: null,
  num2: null
};

/**
 * Reducer method to change the state
 * @param state
 * @param action
 */
export function operationReducer( state = initialOperation, action: fromOperation.actions ): OperationState {
  switch (action.type) {
    case fromOperation.SET_OPERATION:
    return {
      num1: action.sum.num1,
      num2: action.sum.num2
    };

    default:
    return state;
  }
}

/**
 *
 * @param state
 */
export const selectCounter1 = (state: OperationState) => state.num1;

/**
 *
 * @param state
 */
export const selectCounter2 = (state: OperationState) => state.num2;

/**
 * Selector function to search the books of an user
 */
export const selectorTotal = createSelector(
  selectCounter1,
  selectCounter2,
  (num1, num2) => String(num1 + num2)
);
