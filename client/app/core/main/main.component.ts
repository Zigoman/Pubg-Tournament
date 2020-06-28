import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITab } from '../../shared/interfaces/actions.interface';

@Component({
  selector: 'pubg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tabs: any[];

  constructor(private router: Router) {}

  ngOnInit() {
    // this.tabs = [
    //   { action: 'dashboard', text: 'Dashboard' },
    //   { action: 'groups', text: 'Groups' },
    //   { action: 'results', text: 'Results' },
    //   { action: 'scoring', text: 'Scoring' }
    // ];

    this.tabs = [
      { action: 'schedules', text: 'Games Schedules' },
      { action: 'squad', text: 'My Squad' }
    ];
  }

  public changeMain(event: ITab) {
    this.router.navigate([event.action]);
  }
}
