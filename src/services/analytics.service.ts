import { Injectable } from '@angular/core';
import { AnalyticsImplementation, Metric } from '../app/analytics-di/analytics-di.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private implementation: AnalyticsImplementation) { }

  /**
   * Method to load the event of the records
   * @param metric
   */
  public record(metric: Metric): void {
    this.implementation.recordEvent(metric);
  }
}

