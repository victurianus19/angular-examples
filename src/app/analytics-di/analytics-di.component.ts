import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-analytics-di',
  templateUrl: './analytics-di.component.html',
  styleUrls: ['./analytics-di.component.scss']
})
export class AnalyticsDiComponent implements OnInit {

  constructor(private analytics: AnalyticsService) {
    this.analytics.record({
      eventName: 'componentCreated',
      scope: 'AnalyticsDIComponent'
    });
  }

  public ngOnInit() {
    this.analytics.record({
      eventName: 'componentOnInit',
      scope: 'AnalyticsDIComponent'
    });
  }

  public buyButtonPressed(product: string) {
    this.analytics.record({
      eventName: 'buyButtonPressed',
      scope: product
    });
  }

}
