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

  constructor() {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  public getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  public removeToken(): void {
    localStorage.removeItem('access_token');
  }
}
