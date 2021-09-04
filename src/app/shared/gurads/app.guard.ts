import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AppState } from '../../store';
import { selectUser } from '../../store/selectors/user.selectors';
import { CheckLogin } from '../../store/actions/user.actions';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private router: Router, private authSrv: AuthService, private store: Store<AppState>) {}

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkStoreAuthentication().pipe(
      map(authed => {
        if (!authed) {
          const token = this.authSrv.getToken();
          if (token) {
            this.store.dispatch(CheckLogin({ token }));
          }
          this.router.navigate(['/login']).then();
          return false;
        }
        return true;
      })
    );
  }

  private checkStoreAuthentication(): Observable<boolean> {
    return this.store.pipe(select(selectUser)).pipe(map(res => !!res));
  }
}
