import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITab } from '@shared/interfaces/actions.interface';

@Component({
  selector: 'pubg-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() public tabs: ITab[];

  @Output() selectedMain: EventEmitter<ITab> = new EventEmitter<ITab>();

  @Output() logOut: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
    this.tabs = [];
  }

  public selectedTab($event: ITab): void {
    this.selectedMain.emit($event);
  }
}
