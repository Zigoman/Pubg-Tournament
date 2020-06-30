import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ISquad, IUser } from '../../shared/interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {
  constructor(private http$: HttpClient) {}

  public getSquads() {
    return this.http$.get<ISquad[]>(`${environment.api}/getSquads`);
  }

  public addUser(payload: IUser): Observable<IUser> {
    return this.http$.post<IUser>(`${environment.api}/add-user`, payload);
  }

  public userLogin(payload: IUser) {
    return this.http$.post<IUser>(`${environment.api}/login`, payload);
  }
}
