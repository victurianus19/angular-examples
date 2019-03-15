import { Component, OnInit } from '@angular/core';
import * as fromOperation from '../store/sum.actions';
import { selectorTotal } from '../store/sum.reducer';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/auth.actions';
import { AuthEffects } from '../effects/auth.effects';
import * as _ from 'lodash';
import * as fromActionUsers from '../store/entityObjects/user-entity.actions';
import * as fromReducerUsers from '../store/entityObjects/user-entity.reducer';
import * as fromAdapter from '../store/entityObjects/entity-adapter';
import { User } from '../store/entityObjects/entity-adapter';

@Component({
  selector: 'app-operations-example-ngrx',
  templateUrl: './operations-example-ngrx.component.html',
  styleUrls: ['./operations-example-ngrx.component.scss'],
  providers: [AuthEffects]
})
export class OperationsExampleNgrxComponent implements OnInit {
  public total: string[] = [];
  public num1 = [];
  public num2 = [];
  public secondState;
  public userRedux: Object;
  public isUser: boolean;
  public userIds$: any;
  public user$: any;
  public userList = [];

  constructor(private store: Store<any>) {}

  public ngOnInit() {
    this.secondState = {
      num1: null,
      num2: null
    };
    this.store.dispatch( new fromOperation.SetSumAction(this.secondState));

    // Observer of the state of operations in store of redux
    this.store.select('operations').subscribe(result => {
      console.log('Result: ' + result.num1 + ' ' + result.num2);
    });

    // Observer of the auth in store of redux
    this.store.select('auth').subscribe(user => {
      this.total = [];
      this.secondState = {};
      this.userRedux = {};
      this.isUser = true;
      console.log('User: ', user);
      (!_.isNull(user.user)) ? (this.userRedux = user) : (this.userRedux = {});
      this.isUser = false;
    });

    // Observer of the Store to the User object in Redux
    this.store.select('users').subscribe(user => {
      console.log('Users: ', user);
    });
    // Observer of all the users in the store of Redux
    this.store.select(fromReducerUsers.selectAllUsers)
      .subscribe(user => console.log('ALL USERS: ', user));

    // Observer of the all Ids of the users in the store of Redux
    this.userIds$ = this.store.select(fromReducerUsers.selectUserIds);

    // Observer of the Entities of the store of Redux
    this.user$ = this.store.select(fromReducerUsers.selectUserEntities);
  }

  /**
   * Normal Selector with memoized
   */
  public onClickSelectorMemoized() {
    this.userRedux = {};
    this.isUser = false;

    this.secondState = {
      num1: 1,
      num2: 3
    };
    this.num1.push(this.secondState.num1);
    this.num2.push(this.secondState.num2);
    this.total.push(String(selectorTotal(this.secondState)));
    // Change state
    this.store.dispatch( new fromOperation.SetSumAction(this.secondState));

    this.num1.push(this.secondState.num1);
    this.num2.push(this.secondState.num2);
    this.total.push(String(selectorTotal(this.secondState)));
    this.store.dispatch( new fromOperation.SetSumAction(this.secondState));

    this.secondState = {...this.secondState, num2: 8};

    this.num1.push(this.secondState.num1);
    this.num2.push(this.secondState.num2);
    this.total.push(String(selectorTotal(this.secondState)));
    // Change state
    this.store.dispatch( new fromOperation.SetSumAction(this.secondState));
  }

  /**
   * Epic method
   */
  // public getUsers() {
  //   console.log('Sosio');
  //   const getUserEpic = action$ => this.action$.pipe(
  //     ofType(FETCH_USER_FULL),
  //     mergeMap(action =>
  //     ajax('https://jsonplaceholder.typicode.com/posts/2').pipe(
  //       map(response => console.log(response)))
  //     )
  //   );
  //   // getUserEpic.subscribe({
  //   //     next(x) { console.log('data: ', x); },
  //   //     error(err) { console.log('Errors caught'); }
  //   //   });
  // }

  /**
   * Method to run an effect action which it search an user
   */
  public onClickEffect() {
    this.store.dispatch(new fromAuth.GetAuthAction());
  }

  /**
   * Method to add users to the store of Redux
   */
  public onClickEntity() {
    const userList: User[] = [{
      id: '1',
      name: 'Steve'
    },
    {
      id: '2',
      name: 'Mike'
    }];

    // Add the new users
    this.store.dispatch(new fromActionUsers.AddUsers({users: userList}));

    this.userIds$.subscribe(result => console.log('How many users are there?: ', result.length));
    this.user$
    .subscribe(result => {
      console.log(Object.values(result));
      this.userList = Object.values(result);
    });
  }


}
