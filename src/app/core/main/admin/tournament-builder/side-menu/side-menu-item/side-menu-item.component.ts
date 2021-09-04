import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Draggable } from '@fullcalendar/interaction';
import { ISideMenuItem } from '@shared/interfaces/actions.interface';

@Component({
  selector: 'pubg-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements AfterViewInit {
  @Input() public itemInfo: ISideMenuItem | null;

  @Input() public color: string;

  @ViewChild('item') item: ElementRef | undefined;

  constructor() {
    this.itemInfo = null;
    this.color = 'white';
  }

  ngAfterViewInit(): void {
    if (this.item) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const item = new Draggable(this.item.nativeElement, {
        eventData: () => ({
          title: this.itemInfo?.title ? this.itemInfo?.title : this.itemInfo?.text,
          backgroundColor: this.color,
          action: this.itemInfo?.action
        })
      });
    }
  }
}
