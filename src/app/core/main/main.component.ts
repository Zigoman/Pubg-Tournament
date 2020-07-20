import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITab } from '../../shared/interfaces/actions.interface';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'pubg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tabs: ITab[];

  constructor(private AuthSrv: AuthService, private router: Router) {
    this.tabs = [
      { action: 'schedules', text: 'Games Schedules' },
      { action: 'squad', text: 'My Squad' }
    ];
  }

  ngOnInit(): void {}

  public changeMain(event: ITab): void {
    this.router.navigate([event.action]).then();
  }

  public logOut(): void {
    this.AuthSrv.removeToken();
    this.router.navigate(['/login']).then();
  }
}
