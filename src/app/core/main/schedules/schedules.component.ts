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
        date: moment('2020-07-29'),
        name: 'Summer League',
        roomList: [
          {
            startAt: moment('2020-07-29 21:30:00'),
            number: 58424,
            password: 12345,
            mapName: 'Miramar',
            roomId: 1
          },
          {
            startAt: moment('2020-07-29 22:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 2
          },
          {
            startAt: moment('2020-07-29 23:30:00'),
            number: null,
            password: null,
            mapName: 'Erangel',
            roomId: 3
          }
        ]
      },
      {
        date: moment('2020-08-05'),
        name: 'Summer League',
        roomList: [
          {
            startAt: moment('2020-08-05 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 4
          },
          {
            startAt: moment('2020-08-05 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 5
          },
          {
            startAt: moment('2020-08-05 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 6
          }
        ]
      },
      {
        date: moment('2020-08-12'),
        name: 'Summer League',
        roomList: [
          {
            startAt: moment('2020-08-12 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 7
          },
          {
            startAt: moment('2020-08-12 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 8
          },
          {
            startAt: moment('2020-08-12 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 9
          }
        ]
      },
      {
        date: moment('2020-08-19'),
        name: 'Summer League',
        roomList: [
          {
            startAt: moment('2020-08-19 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 10
          },
          {
            startAt: moment('2020-08-19 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 11
          },
          {
            startAt: moment('2020-08-19 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 12
          }
        ]
      },
      {
        date: moment('2020-08-26'),
        name: 'Summer League',
        roomList: [
          {
            startAt: moment('2020-08-26 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 10
          },
          {
            startAt: moment('2020-08-26 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 11
          },
          {
            startAt: moment('2020-08-26 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 12
          }
        ]
      },
      {
        date: moment('2020-09-02'),
        name: 'Summer League',
        roomList: [
          {
            startAt: moment('2020-09-02 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 10
          },
          {
            startAt: moment('2020-09-02 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 11
          },
          {
            startAt: moment('2020-09-02 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 12
          }
        ]
      },
      {
        date: moment('2020-09-09'),
        name: 'Summer League',
        roomList: [
          {
            startAt: moment('2020-09-09 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 10
          },
          {
            startAt: moment('2020-09-09 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 11
          },
          {
            startAt: moment('2020-09-09 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 12
          }
        ]
      },
      {
        date: moment('2020-09-16'),
        name: 'Summer League',
        roomList: [
          {
            startAt: moment('2020-09-16 21:30:00'),
            number: null,
            password: null,
            mapName: 'Sanhok',
            roomId: 10
          },
          {
            startAt: moment('2020-09-16 22:30:00'),
            number: null,
            password: null,
            mapName: 'Miramar',
            roomId: 11
          },
          {
            startAt: moment('2020-09-16 23:30:00'),
            number: null,
            password: null,
            mapName: 'Vikendi',
            roomId: 12
          },
          {
            startAt: moment('2020-09-16 00:00:00'),
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
