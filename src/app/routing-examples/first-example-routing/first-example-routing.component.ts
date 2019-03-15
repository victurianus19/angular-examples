import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-example-routing',
  templateUrl: './first-example-routing.component.html',
  styleUrls: ['./first-example-routing.component.scss']
})
export class FirstExampleRoutingComponent implements OnInit {
  public id: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => { this.id = params['id']; });
  }

  public ngOnInit() {
  }

  public goToBack() {
    this.router.navigate(['/firstRouting']);
  }

}
