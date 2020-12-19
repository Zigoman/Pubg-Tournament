import { LoaderService } from './../../shared/services/loader.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authSrv: AuthService, private lodaerSrv: LoaderService) {}

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

    this.lodaerSrv.increaseCounter();
    return next.handle(req ? req : request).pipe(finalize(() => this.lodaerSrv.decreaseCounter()));
  }
}
