import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITab, ITabs } from '../../interfaces/actions.interface';

@Component({
  selector: 'pubg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public tabs: ITabs;
  @Input() currentTab: ITab;
  @Output() selectedTab: EventEmitter<ITab> = new EventEmitter<ITab>();

  @Input()
  public set tabsData(tabs: ITabs) {
    this.tabs = tabs;
    if (!this.currentTab) {
      this.currentTab = this.tabs[0];
    }
  }

  constructor() {
    this.tabs = [];
  }

  ngOnInit() {}

  public changeTab(tab: ITab) {
    this.currentTab = tab;
    this.selectedTab.emit(tab);
  }
}
