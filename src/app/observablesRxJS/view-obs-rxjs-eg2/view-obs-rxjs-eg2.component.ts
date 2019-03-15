import { Component, OnInit } from '@angular/core';
import { Observable, Subject, from, of, interval, ConnectableObservable, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { multicast, publish, tap, mapTo, refCount, retry, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-view-obs-rxjs-eg2',
  templateUrl: './view-obs-rxjs-eg2.component.html',
  styleUrls: ['./view-obs-rxjs-eg2.component.scss']
})
export class ViewObsRxjsEg2Component implements OnInit {
  public values = [];

  constructor() { }

  public ngOnInit() {
    // Simple example to create an observable
    // this.creatingObservable(5);

    // Simple example to create a subject
    // this.creatingSimpleSubject();

    // An example to create a Multicast subject
    // this.creatingMulticastSubject();

    // An example to create a Multicast subject automatically
    this.creatingMultiCastSubjectReferenceCounting();

    // An example to create a BehaviourSubject
    // this.creatingSubject2();

    // An example to create a ReplaySubject
    // this.creatingSubject3();

    // An example to create a AsyncSubject
    // this.creatingSubject4();

    // An example to create a Subject handling errors
    // this.creatingSubject5();
  }

  /**
   * Method to create an observable
   */
  public creatingObservable(num: number) {
    const observable = Observable.create(function subscribe(observer) {
      const id = setInterval(() => {
        observer.next('Hi');
      }, 1000);

      return function unsubscribe() {
        clearInterval(id);
      };
    });

    let cont = 1;
    const subscription = observable.subscribe((x) => {
      if (num === cont) {
        // To stop of subscription
        subscription.unsubscribe();
      }
      console.log(x);
      cont++;
    });
  }

  /**
   * Method to make an Example of Subjects
   */
  public creatingSimpleSubject() {
    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
      }
    });

    subject.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
      }
    });

    subject.next(1);
    subject.next(2);
  }

  /**
   * Method to make an Example of Multicasted Observables
   */
  public creatingMulticastSubject() {
    const observable = from([1, 2, 3]);
    const subject = new Subject();
    const multicasted = observable.pipe(
      tap(_ => console.log('Do Something!')),
      multicast(subject));

    multicasted.subscribe({
      next: (v) => console.log(`observer Multicast A: ${v}`)
    });

    multicasted.subscribe({
      next: (v) => console.log(`observer Multicast B: ${v}`)
    });

    // subject.next('A');
    // subject.next('B');
    // subject.next('C');

    // uncommented It works although it shows a fail in VS code
    // multicasted.connect();
    // the same: multicasted.subscribe(val => console.log(val));
  }

  /**
   * Method to make an Example of Multicasted Observables with refCount()
   */
  public creatingMultiCastSubjectReferenceCounting() {
    const source = interval(500);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject), refCount());
    let subscription1, subscription2;

    console.log('Observer 1 subscribe');
    subscription1 = multicasted.subscribe({
      next: (v) => console.log(`Observer 1: ${v}`)
    });

    setTimeout(() => {
      console.log('Observer 2 subscribe');
      subscription2 = multicasted.subscribe({
        next: (v) => console.log(`Observer 2: ${v}`)
      });
    }, 600);

    setTimeout(() => {
      console.log('Observer 1 unsubscribe');
      subscription1.unsubscribe();
    }, 1200);

    setTimeout(() => {
      console.log('Observer 2 unsubscribe');
      subscription2.unsubscribe();
    }, 2000);
    multicasted.subscribe((v) => console.log(v));
  }

  /**
   * Method to do an example with BehaviourSubject
   */
  public creatingSubject2() {
    const subject = new BehaviorSubject(0); // 0 is the initial value
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    subject.next(3);
  }

  /**
   * Method to do an example with ReplaySubject
   */
  public creatingSubject3() {
    const subject = new ReplaySubject(5); // buffer 3 values for new subscribers
    this.values = [];

    subject.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
        this.values.push('Observer A: ' + v + ' ');
      }
    });

     subject.next(1);
     subject.next(2);

    subject.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
        this.values.push('Observer B: ' + v + ' ');
      }
    });

    subject.subscribe({
      next: (v) => {
        console.log(`observer C: ${v}`);
        this.values.push('Observer C: ' + v + ' ');
      }
    });

     subject.next(3);
     subject.next(4);
  }

  /**
   * Method to do an example with ReplaySubject
   */
  public creatingSubject4() {
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => {
        console.log(`Observer A: ${v}`);
      }
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => {
        console.log(`Observer B: ${v}`);
      }
    });

    subject.next(5);
    subject.complete();
  }

  public creatingSubject5() {
    const apiDataSuccess = ajax('https://jsonplaceholder.typicode.com/posts/2')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        map(res => {
          if (!res.response) {
            throw new Error('Value unexpected!');
          }
          this.values = res.response.title;
          return res.response;
        }),
        catchError(err => of([]))
      );

      apiDataSuccess.subscribe({
        next(x) { console.log('data: ', x); },
        error(err) { console.log('Errors caught'); }
      });

      const apiDataUnsuccess = ajax('https://invented')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        map(res => {
          if (!res.response) {
            throw new Error('Value unexpected!');
          }
          this.values = res.response.title;
          return res.response;
        }),
        catchError(err => of([]))
      );

      apiDataUnsuccess.subscribe({
        next(x) { console.log('data: ', x); },
        error(err) { console.log('Errors caught'); }
      });
  }

}
