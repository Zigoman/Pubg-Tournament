import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig } from 'ngx-countdown';
import * as moment from 'moment';
import { IRoom } from '../../../../shared/interfaces/store.interface';

@Component({
  selector: 'pubg-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  public config: CountdownConfig;

  private readonly now: moment.Moment;

  public bgURL: string;

  public lessThenDay: boolean;

  @Input() roomInfo?: IRoom;

  @Output() clickRoomID: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('countDown', { static: false }) private countdown: CountdownComponent | undefined;

  constructor() {
    this.bgURL = '';
    this.now = moment();
    this.lessThenDay = false;
    this.config = {};
  }

  ngOnInit(): void {
    const hoursInDay = 24;
    if (this.roomInfo) {
      this.bgURL = `../assets/images/${this.roomInfo.mapName.toLowerCase()}.jpg`;
      this.lessThenDay = moment(this.roomInfo.startAt).diff(this.now, 'hours') < hoursInDay;
      if (this.lessThenDay) {
        this.config = {
          leftTime: moment(this.roomInfo.startAt).diff(this.now, 'seconds')
        };
      }
    }
  }
}
