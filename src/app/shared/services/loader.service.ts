import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, asapScheduler } from 'rxjs';
import { debounceTime, distinctUntilChanged, observeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private counterSubject: BehaviorSubject<number>;

  // private loadCounter: number;
  public loadCounter: number;

  public counterValue$: Observable<number>;
  // public handlerWithoutDelay: Subject<any> = new Subject();

  constructor() {
    const LOADER_EVENTS_DEBOUNCE = 50;

    this.loadCounter = 0;
    this.counterSubject = new BehaviorSubject<number>(this.loadCounter);
    this.counterValue$ = this.counterSubject.pipe(
      debounceTime(LOADER_EVENTS_DEBOUNCE),
      distinctUntilChanged(),
      observeOn(asapScheduler)
    );
  }

  public increaseCounter(): void {
    this.loadCounter += 1;
    this.counterSubject.next(this.loadCounter);
  }

  public decreaseCounter(): void {
    this.loadCounter -= 1;
    this.counterSubject.next(this.loadCounter);
  }
}
