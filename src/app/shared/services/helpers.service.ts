import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {
  public amCalendarConf: object;

  constructor() {
    this.amCalendarConf = {
      lastDay: '[Yesterday]',
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      lastWeek: '[last] dddd',
      nextWeek: 'dddd',
      sameElse: 'L'
    };
  }
}
