import { Component, Input } from '@angular/core';
import { ISideMenu } from '@shared/interfaces/actions.interface';

@Component({
  selector: 'pubg-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() public sideMenuOptions: ISideMenu | null;

  constructor() {
    this.sideMenuOptions = null;
  }
}
