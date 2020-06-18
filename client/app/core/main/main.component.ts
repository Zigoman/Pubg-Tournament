import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pubg-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public tabs: any[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.tabs = [
      { action: 'dashboard', name: 'Dashboard' },
      { action: 'groups', name: 'Groups' },
      { action: 'results', name: 'Results' },
      { action: 'scoring', name: 'Scoring' }
    ];
  }

  public changeMain($event: string) {
    this.router.navigate([$event]);
  }
}
