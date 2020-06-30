import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {
  constructor() {}

  public randomID() {
    const max = 9;
    const min = 2;
    return '_' + Math.random().toString(5).substr(min, max);
  }
}
