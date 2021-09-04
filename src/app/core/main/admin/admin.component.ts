import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITab, ITabs } from '@shared/interfaces/actions.interface';

@Component({
  selector: 'pubg-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public tabs: ITabs;

  public selectedTab: ITab;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.tabs = [
      { text: 'Tournaments', action: 'tournaments' },
      { text: 'Users', action: 'users' },
      { text: 'Squads', action: 'squads' }
    ];
    this.selectedTab = this.tabs[0];
  }

  public changeRoute(event: ITab): void {
    this.router.navigate([event.action], { relativeTo: this.route }).then();
  }
}
