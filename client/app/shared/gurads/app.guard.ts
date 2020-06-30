import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private router: Router, private authSrv: AuthService) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('this.authSrv.isLoggedIn', this.authSrv.isLoggedIn());
    if (!this.authSrv.isLoggedIn()) {
      this.router.navigate(['/login']).then();
      return false;
    }
    return true;
  }
}
