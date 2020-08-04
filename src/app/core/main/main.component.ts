import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITab } from '../../shared/interfaces/actions.interface';
import { AuthService } from '../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IUser } from '../../shared/interfaces/store.interface';
import { selectUser } from '../../store/selectors/user.selectors';

@Component({
  selector: 'pubg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tabs: ITab[];
  public admin$: Observable<boolean> | null;

  constructor(private AuthSrv: AuthService, private router: Router, private store: Store<{ user: IUser }>) {
    this.tabs = [];
    this.admin$ = null;
  }

  ngOnInit(): void {
    this.tabs = [
      { action: 'schedules', text: 'Games Schedules' },
      { action: 'squad', text: 'My Squad' }
    ];
    this.store.pipe(select(selectUser)).subscribe(User => {
      if (User?.admin) {
        this.tabs.push({ action: 'admin', text: 'Admin' });
      }
    });
  }
  public changeMain(event: ITab): void {
    this.router.navigateByUrl(event.action).then();
  }

  public logOut(): void {
    this.AuthSrv.removeToken();
    this.router.navigateByUrl('/login').then();
  }
}
