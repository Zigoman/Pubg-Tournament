import { Component, OnInit } from '@angular/core';
import { HelpersService } from '../../../shared/services/helpers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISchedules } from '../../../shared/interfaces/store.interface';
import { selectAllTournaments } from '../../../store/selectors/tournaments.selectors';
import { AppState } from '../../../store';
import { select, Store } from '@ngrx/store';
import { DataParserService } from '../../../store/services/data-parser.service';

@Component({
  selector: 'pubg-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  public schedules: ISchedules;

  constructor(
    public HelperSrv: HelpersService,
    public dataParserService: DataParserService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.schedules = [];
  }

  ngOnInit(): void {
    this.store.pipe(select(selectAllTournaments)).subscribe(tournaments => {
      this.schedules = this.dataParserService.tournamentToSchedules(tournaments);
    });
  }

  public routeToRoom(roomID: number): void {
    this.router.navigate([roomID], { relativeTo: this.route }).then();
  }
}
