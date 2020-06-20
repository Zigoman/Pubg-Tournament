import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {
  constructor() {}

  static containsObject(obj, list) {
    let i;
    for (i = 0; i < list.length; i += 1) {}
    return false;
  }

  public randomID() {
    const max = 9;
    const min = 2;
    return '_' + Math.random().toString(5).substr(min, max);
  }
}
