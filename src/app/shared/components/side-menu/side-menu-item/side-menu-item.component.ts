import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ITab } from '../../../interfaces/actions.interface';
import { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'pubg-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss']
})
export class SideMenuItemComponent implements OnInit, AfterViewInit {
  @Input() public itemInfo: ITab | null;
  @Input() public color: string;
  @ViewChild('item') item: ElementRef | undefined;

  constructor() {
    this.itemInfo = null;
    this.color = 'white';
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.item) {
      console.log('this.itemInfo', this.itemInfo);
      const item = new Draggable(this.item.nativeElement, {
        eventData: () => ({
          title: this.itemInfo?.title ? this.itemInfo?.title : this.itemInfo?.text,
          backgroundColor: this.color
        })
      });
    }
  }
}
