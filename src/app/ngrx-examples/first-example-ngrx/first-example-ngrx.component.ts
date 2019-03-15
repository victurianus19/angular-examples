import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { DisableLoadingAction, EnableLoadingAction } from '../loading.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-first-example-ngrx',
  templateUrl: './first-example-ngrx.component.html',
  styleUrls: ['./first-example-ngrx.component.scss']
})
export class FirstExampleNgrxComponent implements OnInit, OnDestroy {
  public isLoading: boolean;
  public subscription: Subscription;

  // properties to spinner
  public mode = 'indeterminate';
  public value = 50;

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {
    this.subscription = this.store.select('isLoading').subscribe(result => {
      this.isLoading = result.isLoading;
      console.log(this.isLoading);
    });
  }

  public getLoad() {
    this.store.dispatch( new EnableLoadingAction('User clicked') );
  }

  public getUnload() {
    this.store.dispatch( new DisableLoadingAction('User unclicked') );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
