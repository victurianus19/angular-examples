import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '../../../services/message.service';
import * as _ from 'lodash';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-second-example-http',
  templateUrl: './second-example-http.component.html',
  styleUrls: ['./second-example-http.component.scss']
})
export class SecondExampleHttpComponent implements OnInit {
  constructor(private http: HttpClient, private msgService: MessageService) {}
  public data: Object;
  public loading: boolean;
  public msgs: string[];

  public ngOnInit() {
    this.msgs = [];
    this.msgService.messages = [];
  }

  public makeRequest() {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/2')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError)
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
        // Using the second interceptor to calculate the time
        this.msgs = _.cloneDeep(this.msgService.messages);
        console.log(this.msgService.messages);
      });
  }

  /**
   * Method to handle the error in the HTTP request
   * @param error
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
