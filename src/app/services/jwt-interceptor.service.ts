import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JwtInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(this.addTokenToRequest(request))
      .pipe(
        switchMap((requestWithAuthHeader) => next.handle(requestWithAuthHeader)),
      );
  }

  private addTokenToRequest(request: HttpRequest<any>): HttpRequest<any> {
    const jwtToken = 'this-is-the-token';

    const requestWithAuthHeader = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return requestWithAuthHeader;
  }
}
