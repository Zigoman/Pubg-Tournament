import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { checkUser } from './store/actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'pubg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authSrv: AuthService, private store: Store) {}

  ngOnInit(): void {
    const token = this.authSrv.getToken();
    if (token) {
      this.store.dispatch(checkUser({ token }));
    }
  }
}
