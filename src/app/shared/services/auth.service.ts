import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { checkUser, loadUser } from '../../store/actions/user.actions';
import { Store } from '@ngrx/store';
import { ApiHttpService } from '../../store/services/app.httpservice';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private headers: HttpHeaders;

  constructor(private apiService: ApiHttpService) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  public getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('access_token');
    if (token) {
      const test = this.apiService.checkUser(token).subscribe(x => {
        if (x) {
          console.log('test', x);
          // return true;
        }
      });
    }
    return localStorage.getItem('access_token') !== null;
  }

  public removeToken(): void {
    localStorage.removeItem('access_token');
  }
}
