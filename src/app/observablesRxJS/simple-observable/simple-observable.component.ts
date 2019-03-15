import { Component, OnInit } from '@angular/core';
import { Observable, of, fromEvent,  } from 'rxjs';
import { scan, tap, throttleTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-simple-observable',
  templateUrl: './simple-observable.component.html',
  styleUrls: ['./simple-observable.component.scss']
})
export class SimpleObservableComponent implements OnInit {

  private myObservable: Observable<number>;
  private values: Array<any> = [];
  private isPressBtnSimpleEx: boolean;
  private isPressBtnSecondEx: boolean;
  private isPressBtnRxJSEx: boolean;
  private isPressBtnRxJSEx2: boolean;
  private isPressBtnRxJSEx3: boolean;
  private sTextHeader: String;
  private count: number;

  constructor() { }

  public ngOnInit() {
    // this.simpleObservableEx();
    // this.secondObservableEx();
    // this.multicastObservable();
    this.isPressBtnSimpleEx = false;
    this.isPressBtnSecondEx = false;
    this.isPressBtnRxJSEx = false;
    this.isPressBtnRxJSEx2 = false;
    this.isPressBtnRxJSEx3 = false;
    this.count = 0;
  }

  public simpleObservableEx() {
    // Create an observable that emits three values
    this.myObservable = of(1, 2, 3);
    this.values = [];

    // Create an observer object
    const myObserver = {
      next: x => {
        console.log('Observer got a next value: ' + x);
        this.values.push(x);
      },
      error: err => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };

    // Execute with the observer object
    this.myObservable.subscribe(myObserver).unsubscribe();
  }

  public secondObservableEx() {
    // Create an obsevable
    const sequence = new Observable(observer => {
      observer.next(4);
      observer.next(5);
      observer.next(6);
      observer.complete();

      observer.unsubscribe();
    });

    this.values = [];
    // Execute the observable and print the result
    sequence.subscribe({
      next: num => {
        console.log(num);
        this.values.push(num);
      },
      error() { console.log('Error sequence'); },
      complete() { console.log('Finished sequence'); }
    }).unsubscribe(); { console.log('Unsubscribed subscription'); }
  }

  /* https://blog.angularindepth.com/rxjs-understanding-the-publish-and-share-operators-16ea2f446635 */
  public multicastObservable() {

  }

  /**
   * Method to do a simple example with RxJS
   */
  public firstRxJSObservable() {
    const button = document.querySelector('#b');
    this.count = 0;
    fromEvent(button, 'click').subscribe(() => {
      this.count++;
      console.log(`Clicked ${this.count} times`);
      this.values.push(`Clicked ${this.count} times`);
    });
  }

  /**
   * Method to do a simple example to control the events flow
   */
  public secondRxJSObservable() {
    const button = document.querySelector('#b2');
    this.count = 0;
    const source = of(1, 2, 3);
    source
    .pipe(throttleTime(1000),
      scan((acc, curr) => acc + curr, 0))
    .subscribe((value) => {
      console.log(`Clicked ${value} times`);
      this.values.push(`Clicked ${value} times`);
    });
  }

  /**
   * Method to transform the values.
   */
  public thirdRxJSObservable() {
    const button = document.querySelector('#b3');
    this.count = 0;
    fromEvent(button, 'click')
    .pipe(throttleTime(1000))
    .subscribe((value) => {
      console.log(`Clicked ${value} times`);
      this.values.push(`Clicked ${value} times`);
    });
  }

  /**
   * Method to execute the simple observable
   */
  public firstObservable() {
    this.isPressBtnSimpleEx = true;
    this.sTextHeader = 'First Observable Example';
    this.simpleObservableEx();
  }

  /**
   * Method to execute the second observable in RxJS
   */
  public secondObservable() {
    this.isPressBtnSecondEx = true;
    this.sTextHeader = 'Second Observable Example';
    this.secondObservableEx();
  }

  /**
   * Method to execute the second observable in RxJS
   */
  public btnFirstObservableRxJS() {
    if (!this.isPressBtnRxJSEx) {
      this.isPressBtnRxJSEx = true;
      this.isPressBtnRxJSEx2 = false;
      this.isPressBtnRxJSEx3 = false;
      this.sTextHeader = 'First RxJS Observable Example: Purity';
      this.values = [];
    }
    this.firstRxJSObservable();
  }

  public btnSecondObservableRxJS() {
    if (!this.isPressBtnRxJSEx2) {
      this.isPressBtnRxJSEx2 = true;
      this.isPressBtnRxJSEx3 = false;
      this.isPressBtnRxJSEx = false;
      this.sTextHeader = 'Second RxJS Observable Example: Flow';
      this.values = [];
    }
    this.secondRxJSObservable();
  }

  public btnThirdObservableRxJS() {
    if (!this.isPressBtnRxJSEx3) {
      this.isPressBtnRxJSEx3 = true;
      this.isPressBtnRxJSEx = false;
      this.isPressBtnRxJSEx2 = false;
      this.sTextHeader = 'Third RxJS Observable Example: Normal';
      this.values = [];
    }
    this.thirdRxJSObservable();
  }

}
