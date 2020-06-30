import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pubg-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {
  public squadID: number;
  public squadsList: any[];

  constructor() {}

  ngOnInit(): void {
    this.squadID = null;
    this.squadsList = [];
    console.log(' this.squadsList', this.squadsList);
  }
}
