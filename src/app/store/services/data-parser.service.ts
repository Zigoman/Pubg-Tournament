import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ISchedules, ITournaments } from '@shared/interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class DataParserService {
  public tournamentToSchedules(tournaments: ITournaments): ISchedules {
    const schedules: ISchedules = [];
    tournaments.forEach(tournament => {
      tournament.roomList.forEach(room => {
        const roomDate = moment(room.startAt);
        const index = schedules.findIndex(
          schedule => schedule.date.isSame(roomDate, 'day') && tournament.name === schedule.name
        );
        if (index !== -1) {
          schedules[index].roomList.push(room);
        } else {
          schedules.push({
            name: tournament.name,
            roomList: [room],
            color: tournament.color,
            date: roomDate
          });
        }
      });
    });
    return schedules.sort((a, b) => moment.utc(a.date).diff(moment.utc(b.date)));
  }
}
