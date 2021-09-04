import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { firstValueFrom } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from '../../store';
import { AuthService } from '../services/auth.service';
import { selectUser, selectUserChecked } from '../../store/selectors/user.selectors';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private router: Router, private authSrv: AuthService, private store: Store<AppState>) {}

  public async canActivate(): Promise<boolean> {
    // If this is the first page load, wait for app to query user
    await firstValueFrom(this.store.select(selectUserChecked).pipe(filter(r => r)));

    const authed = await this.checkStoreAuthentication();
    if (!authed) {
      this.router.navigate(['/login']).then();
      return false;
    }
    return true;
  }

  private async checkStoreAuthentication(): Promise<boolean> {
    return firstValueFrom(this.store.pipe(select(selectUser)).pipe(map(user => !!user)));
  }
}
