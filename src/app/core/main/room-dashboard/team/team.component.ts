import { Component, Input } from '@angular/core';
import { ITeam } from '@shared/interfaces/store.interface';

@Component({
  selector: 'pubg-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  @Input() teamInfo?: ITeam;
}
