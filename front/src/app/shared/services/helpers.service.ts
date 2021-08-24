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

  public randomID(): string {
    const max = 9;
    const min = 2;
    return `_${Math.random().toString(5).substr(min, max)}`;
  }
}
