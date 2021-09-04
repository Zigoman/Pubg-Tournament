import { Component } from '@angular/core';
import { ISquad } from '@shared/interfaces/store.interface';

@Component({
  selector: 'pubg-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent {
  public squadID: number | null;

  public squadsList: ISquad[];

  constructor() {
    this.squadID = null;
    this.squadsList = [];
  }
}
