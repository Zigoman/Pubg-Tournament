import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authSrv: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.authSrv.getToken();
    let req = null;
    if (authToken) {
      req = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken
        }
      });
    }

    return next.handle(req ? req : request);
  }
}
