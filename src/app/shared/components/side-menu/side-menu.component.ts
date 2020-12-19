import { Component, Input, OnInit } from '@angular/core';
import { ISideMenu } from '../../interfaces/actions.interface';

@Component({
  selector: 'pubg-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() public sideMenuOptions: ISideMenu | null;

  constructor() {
    this.sideMenuOptions = null;
  }

  ngOnInit(): void {}
}
