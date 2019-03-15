import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';
import { MessageService } from '../../services/message.service';

@Injectable()
export class SecondInterceptor implements HttpInterceptor {
  constructor(private messenger: MessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const started = Date.now();
    let ok: string;

    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap(
          // Succeeds when there is a response; ignore other events
          event => {
            ok = event instanceof HttpResponse ? 'succeeded' : '';
            if (ok === 'succeeded') {
              const elapsed = Date.now() - started;
              const msg = `${req.method} "${req.urlWithParams}"
                ${ok} in ${elapsed} ms.`;
              this.messenger.add(msg);
            }
          },
          // Operation failed; error is an HttpErrorResponse
          error => ok = 'failed'
        ),
        // Log when response observable either completes or errors
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} and finished in ${elapsed} ms.`;
          console.log(msg);
        })
      );
  }
}