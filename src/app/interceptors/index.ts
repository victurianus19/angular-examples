import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FirstInterceptor } from './first-interceptor';
import { SecondInterceptor } from './second-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true }
];
