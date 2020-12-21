import { Component, OnInit } from '@angular/core';
import { ISideMenu } from '../../../../shared/interfaces/actions.interface';
import daygrid from '@fullcalendar/daygrid';
import timegrid from '@fullcalendar/timegrid';
import list from '@fullcalendar/list';
import interaction from '@fullcalendar/interaction';
import moment from '@fullcalendar/moment';
import { select, Store } from '@ngrx/store';
import { selectAllTournaments } from '../../../../store/selectors/tournaments.selectors';
import { AppState } from '../../../../store';

@Component({
  templateUrl: './tournament-builder.component.html',
  styleUrls: ['./tournament-builder.component.scss']
})
export class TournamentBuilderComponent implements OnInit {
  public sideMenu: ISideMenu;
  public currentEvents: object[];
  public options: object;

  constructor(private store: Store<AppState>) {
    this.sideMenu = {
      title: null,
      sections: []
    };
    this.options = {
      plugins: [daygrid, timegrid, list, interaction, moment],
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      expandRows: false,
      contentHeight: 815,
      editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: (info: string) => {
        // is the "remove after drop" checkbox checked?
        console.log('info', info);
      },
      dateClick: (e: object) => {
        console.log(e);
      },
      eventClick: (e: object) => {
        console.log(e);
      }
    };
    this.currentEvents = [];
  }

  ngOnInit(): void {
    this.sideMenu = {
      title: 'Creat/Edit Tournament',
      sections: [
        {
          title: 'Create Tournament',
          color: '#ffffff',
          items: [{ text: 'Add Full Tournament', action: 'singleDayOne', title: 'Tournament' }]
        },
        {
          title: 'Create Single Day Tournament',
          color: '#ffffff',
          items: [
            { text: 'One Match', action: 'singleDayOne', title: 'Single Day' },
            { text: 'Two Matches', action: 'singleDayTwo', title: 'Single Day' },
            { text: 'Three Matches', action: 'singleDayThree', title: 'Single Day' }
          ]
        }
      ]
    };

    this.store.pipe(select(selectAllTournaments)).subscribe(tournaments => {
      this.currentEvents = [];
      tournaments.forEach(tournament => {
        this.sideMenu.sections.push({
          title: tournament.name,
          color: tournament.color,
          items: [
            { text: 'Add One Match', action: 'singleDayOne', title: tournament.name },
            { text: 'Add Two Matches', action: 'singleDayTwo', title: tournament.name },
            { text: 'Add Three Matches', action: 'singleDayThree', title: tournament.name }
          ]
        });
        tournament.roomList.forEach((room, i) => {
          this.currentEvents.push({
            id: i,
            title: tournament.name,
            start: room.startAt,
            backgroundColor: tournament.color
          });
        });
      });
    });
  }
}
