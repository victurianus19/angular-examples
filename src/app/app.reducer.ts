import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromLoad from './ngrx-examples/loading.reducer';
import * as fromAuth from './ngrx-examples/store/auth.reducer';
import * as fromBook from './ngrx-examples/store/book.reducer';
import * as fromOperation from './ngrx-examples/store/sum.reducer';
import * as fromUsers from './ngrx-examples/store/entityObjects/user-entity.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

// Interfacer AppStatess
export interface AppState {
    isLoading: fromLoad.State;
    auth: fromAuth.AuthState;
    books: fromBook.BookState;
    operations: fromOperation.OperationState;
    router: RouterReducerState;
    users: fromUsers.State;
}

export const appReducers: ActionReducerMap<AppState> = {
    isLoading: fromLoad.loadingReducer,
    auth: fromAuth.authReducer,
    books: fromBook.bookReducer,
    operations: fromOperation.operationReducer,
    router: routerReducer,
    users: fromUsers.reducer
};
