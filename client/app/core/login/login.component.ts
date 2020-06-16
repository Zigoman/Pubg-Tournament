import { Component, OnInit } from '@angular/core';
import { IActionMenu, ITab, ITabs } from '../../shared/interfaces/actions';

@Component({
  selector: 'pubg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public tabs: ITabs;
  private selectedTab: ITab;
  public clans: IActionMenu;
  public haveAClan: boolean;

  constructor() {}

  ngOnInit() {
    this.haveAClan = false;

    this.tabs = [
      { text: 'Login', icon: 'login', action: 'login' },
      { text: 'SignUp', icon: 'sign-up', action: 'signUp' }
    ];

    this.clans = {
      actions: [
        { action: 'any', text: 'string1' },
        { action: 'any', text: 'string2' },
        { action: 'any', text: 'string3' },
        { action: 'any', text: 'string4' },
        { action: 'any', text: 'string5' },
        { action: 'any', text: 'string6' },
        { action: 'any', text: 'string7' },
        { action: 'any', text: 'string1' },
        { action: 'any', text: 'string2' },
        { action: 'any', text: 'string3' },
        { action: 'any', text: 'string4' },
        { action: 'any', text: 'string5' },
        { action: 'any', text: 'string6' },
        { action: 'any', text: 'string7' }
      ]
    };
    this.selectedTab = this.tabs[0];
  }

  public changeTab($event: ITab) {
    this.selectedTab = $event;
  }

  gutAClan(event: boolean) {
    this.haveAClan = event;
  }
}
