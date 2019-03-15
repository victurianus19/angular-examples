import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-routings',
  templateUrl: './view-routings.component.html',
  styleUrls: ['./view-routings.component.scss']
})
export class ViewRoutingsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  public ngOnInit() {
  }

  public goToProduct(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }
}
