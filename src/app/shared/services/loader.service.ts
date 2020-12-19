import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  // private loadCounter: number;
  public loadCounter: number;
  public counterValue: BehaviorSubject<number>;
  // public handlerWithoutDelay: Subject<any> = new Subject();

  constructor() {
    this.loadCounter = 0;
    this.counterValue = new BehaviorSubject<number>(this.loadCounter);
  }

  public increaseCounter(): void {
    this.loadCounter += 1;
    this.counterValue.next(this.loadCounter);
  }

  public decreaseCounter(): void {
    this.loadCounter -= 1;
    this.counterValue.next(this.loadCounter);
  }
}
