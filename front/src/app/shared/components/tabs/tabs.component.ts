import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITab, ITabs } from '../../interfaces/actions.interface';

@Component({
  selector: 'pubg-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  public tabs: ITabs;
  @Input() currentTab: ITab | null;
  @Input() large: boolean;
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
    this.currentTab = null;
    this.large = false;
  }

  ngOnInit(): void {}

  public changeTab(tab: ITab): void {
    this.currentTab = tab;
    this.selectedTab.emit(tab);
  }
}
