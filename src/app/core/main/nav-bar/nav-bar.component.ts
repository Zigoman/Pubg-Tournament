import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITab } from '../../../shared/interfaces/actions.interface';

@Component({
  selector: 'pubg-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() public tabs: ITab[];
  @Output() selectedMain: EventEmitter<ITab> = new EventEmitter<ITab>();
  @Output() logOut: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
    this.tabs = [];
  }

  ngOnInit(): void {}

  public selectedTab($event: ITab): void {
    this.selectedMain.emit($event);
  }
}
