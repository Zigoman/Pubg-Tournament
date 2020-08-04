import { Component, OnInit } from '@angular/core';
import { ITab, ITabs } from '../../../shared/interfaces/actions.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pubg-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
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

  ngOnInit(): void {}

  public changeRoute(event: ITab): void {
    this.router.navigate([event.action], { relativeTo: this.route }).then();
  }
}
