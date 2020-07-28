import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { select, Store } from '@ngrx/store';
import { IUser } from '../interfaces/store.interface';
import { checkUser, loadUser, loadUserFailure, loadUserSuccess } from '../../store/actions/user.actions';
import { selectUser } from '../../store/selectors/user.selectors';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AppGuard implements CanActivate {
  public test: Observable<boolean | null>;

  constructor(private router: Router, private authSrv: AuthService, private store: Store<{ user: IUser }>) {
    this.test = this.store.pipe(select(selectUser));
  }

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // const token = this.authSrv.getToken();
    // if (token) {
    //   this.store.dispatch(checkUser({ token }));
    //
    //   return this.store.pipe(
    //     select(loadUserSuccess),
    //     map(users => {
    //       // `authed` is boolean as we defined in "Actions" as `isAuthenticated`
    //       console.log('user', users.user);
    //       if (users.user) {
    //         // Dispatch an event to let "Effects" navigate users to login
    //         // this.store.dispatch({loadUserFailure});
    //         return true;
    //       }
    //       // Let "Router" allow user entering the page
    //       return true;
    //     })
    //   );
    // }
    this.router.navigate(['/login']).then();
    return false;
  }
}
