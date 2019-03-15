import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-example-http',
  templateUrl: './simple-example-http.component.html',
  styleUrls: ['./simple-example-http.component.scss']
})
export class SimpleExampleHttpComponent implements OnInit {
  public data: Object;
  public loading: boolean;

  constructor(private http: HttpClient) { }

  public ngOnInit() {
  }

  public makeRequest() {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

}
