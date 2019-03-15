/**
 * Defines a simple Metric
 */
export interface Metric {
    eventName: string;
    scope: string;
}

/**
 * Defines an implementation for recording analytics
 */
export interface AnalyticsImplementation {
    recordEvent(metric: Metric): void;
}
