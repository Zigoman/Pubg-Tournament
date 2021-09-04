import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISideMenu } from '@shared/interfaces/actions.interface';
import daygrid from '@fullcalendar/daygrid';
import timegrid from '@fullcalendar/timegrid';
import list from '@fullcalendar/list';
import interaction from '@fullcalendar/interaction';
import moment from '@fullcalendar/moment';
import { select, Store } from '@ngrx/store';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { selectAllTournaments } from '../../../../store/selectors/tournaments.selectors';
import { AppState } from '../../../../store';
import { TournamentFormComponent } from './tournament-form/tournament-form.component';

@Component({
  templateUrl: './tournament-builder.component.html',
  styleUrls: ['./tournament-builder.component.scss']
})
export class TournamentBuilderComponent implements OnInit, OnDestroy {
  public sideMenu: ISideMenu;

  public currentEvents: object[];

  public options: object;

  public dialogRef: DynamicDialogRef | null;

  constructor(private store: Store<AppState>, private dialogSrv: DialogService) {
    this.dialogRef = null;
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
      drop: () => {
        this.dialogRef = this.dialogSrv.open(TournamentFormComponent, {
          header: 'Choose a Car',
          width: '500px',
          footer: ' '
        });
        // console.log('drop', info.jsEvent.target.attributes['data-event']);
      },
      eventReceive: () => {
        // console.log('eventReceive');
      }
      // dateClick: (e: object) => {
      //   // console.log(e);
      // },
      // eventClick: (e: object) => {
      //   // console.log(e);
      // }
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
            { text: 'Add One Match', action: 1, title: tournament.name },
            { text: 'Add Two Matches', action: 2, title: tournament.name },
            { text: 'Add Three Matches', action: 3, title: tournament.name }
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

  ngOnDestroy(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
