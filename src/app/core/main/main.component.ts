import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITab } from '../../shared/interfaces/actions.interface';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IUser } from '../../shared/interfaces/store.interface';

@Component({
  selector: 'pubg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tabs: ITab[];
  public admin$: Observable<IUser>;

  constructor(private AuthSrv: AuthService, private router: Router, private store: Store<{ user: IUser }>) {
    this.tabs = [];
    this.admin$ = store.pipe(select('user'));
  }

  ngOnInit(): void {
    this.tabs = [
      { action: 'schedules', text: 'Games Schedules' },
      { action: 'squad', text: 'My Squad' }
    ];
    this.admin$.subscribe(x => {
      console.log('x', x);
    });
  }

  public changeMain(event: ITab): void {
    this.router.navigate([event.action]).then();
  }

  public logOut(): void {
    this.AuthSrv.removeToken();
    this.router.navigate(['/login']).then();
  }
}
