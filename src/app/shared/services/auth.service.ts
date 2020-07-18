import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

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

  public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  public removeToken(): void {
    localStorage.removeItem('access_token');
  }
}
