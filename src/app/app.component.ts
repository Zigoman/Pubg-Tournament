import { LoaderService } from './shared/services/loader.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'pubg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loaderSub$: Observable<boolean>;

  constructor(private loaderSrv: LoaderService) {
    this.loaderSub$ = this.loaderSrv.counterValue$.pipe(
      tap(console.log),
      map(r => r > 0)
    );
  }
}
