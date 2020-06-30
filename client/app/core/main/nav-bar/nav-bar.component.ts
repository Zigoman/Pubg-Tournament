import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITab } from '../../../shared/interfaces/actions.interface';

@Component({
  selector: 'pubg-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() public tabs: any[];
  @Output() selectedMain: EventEmitter<ITab> = new EventEmitter<ITab>();

  constructor() {
    this.tabs = [];
  }

  ngOnInit() {}

  public selectedTab($event: ITab) {
    this.selectedMain.emit($event);
  }

  public logout() {
    console.log('test');
  }
}
