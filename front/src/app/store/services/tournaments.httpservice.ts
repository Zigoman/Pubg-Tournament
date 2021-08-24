import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ITournaments } from '../../shared/interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class TournamentsApiService {
  constructor(private http$: HttpClient) {}

  public getTournaments(id: string): Observable<ITournaments> {
    return this.http$.post<ITournaments>(`${environment.api}/getTournaments`, { id });
  }
}
