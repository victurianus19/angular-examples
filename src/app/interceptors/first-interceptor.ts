import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class FirstInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      // Modify something ...
      // Get the auth token from the service
      const authToken = this.auth.getAuthorizationToken();

      // Clone the request and replace the original headers
      const authReq = req.clone({ setHeaders: {
        Authorization: authToken
      },
      body: 'UserVIP is Authorized'});
      console.log(authReq);

    // Pass the modified request to the interceptor
    return next.handle(authReq);
  }
}
