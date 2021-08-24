import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from '../../../../shared/interfaces/store.interface';

@Component({
  selector: 'pubg-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() teamInfo?: ITeam;

  constructor() {}

  ngOnInit(): void {}
}
