import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IPlayer, IUser } from '../../shared/interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(private http$: HttpClient) {}

  public addUser(payload: IUser): Observable<IUser> {
    return this.http$.post<IUser>(`${environment.api}/auth/signup`, payload);
  }

  public loadUser(payload: IUser): Observable<IUser> {
    return this.http$.post<IUser>(`${environment.api}/auth/login`, payload);
  }

  public getPlayers(): Observable<IPlayer[]> {
    return this.http$.get<IPlayer[]>(`${environment.api}/users`);
  }
}
