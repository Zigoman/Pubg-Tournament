import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HelpersService } from '../../../shared/services/helpers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISchedule } from '../../../shared/interfaces/store.interface';

@Component({
  selector: 'pubg-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  public schedules: ISchedule[];

  constructor(public HelperSrv: HelpersService, private router: Router, private route: ActivatedRoute) {
    this.schedules = [];
  }

  ngOnInit(): void {
    this.schedules = [
      {
        date: moment('2020-07-01'),
        roomList: [
          {
            startAt: moment('2020-07-01 21:30:00'),
            number: 58424,
            password: 12345,
            mapName: 'Miramar',
            roomId: 1
          },
          {
            startAt: moment('2020-07-01 22:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 2
          },
          {
            startAt: moment('2020-07-01 23:30:00'),
            number: null,
            password: null,
            mapName: 'Erangel',
            roomId: 3
          }
        ]
      },
      {
        date: moment('2020-07-08'),
        roomList: [
          {
            startAt: moment('2020-07-08 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 4
          },
          {
            startAt: moment('2020-07-08 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 5
          },
          {
            startAt: moment('2020-07-08 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 6
          }
        ]
      },
      {
        date: moment('2020-07-15'),
        roomList: [
          {
            startAt: moment('2020-07-15 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 7
          },
          {
            startAt: moment('2020-07-15 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 8
          },
          {
            startAt: moment('2020-07-15 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 9
          }
        ]
      },
      {
        date: moment('2020-07-22'),
        roomList: [
          {
            startAt: moment('2020-07-22 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 10
          },
          {
            startAt: moment('2020-07-22 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 11
          },
          {
            startAt: moment('2020-07-22 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 12
          }
        ]
      }
    ];
  }

  public routeToRoom(roomID: number): void {
    this.router.navigate([roomID], { relativeTo: this.route }).then();
  }
}
