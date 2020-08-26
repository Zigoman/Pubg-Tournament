import { LoaderService } from './shared/services/loader.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pubg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public loaderSub: number;

  constructor(private loaderSrv: LoaderService) {
    this.loaderSub = 0;

    this.loaderSrv.counterValue.subscribe(val => {
      console.log(val);

      this.loaderSub = val;
    });
  }
}
