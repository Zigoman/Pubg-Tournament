import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppGuard } from './shared/gurads/app.guard';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './core/login/login.component';
import { AuthInterceptor } from './store/interceptors/authconfig.interceptor';
import { metaReducers, reducers } from './store';
import { UserEffects } from './store/effects/user.effects';
import { TournamentsEffects } from './store/effects/tournaments.effects';
import { DataParserService } from './store/services/data-parser.service';
import { CheckLogin, NoLogin } from './store/actions/user.actions';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([UserEffects, TournamentsEffects])
  ],
  providers: [
    AppGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DataParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(store: Store, authSrv: AuthService) {
    const token = authSrv.getToken();
    if (token) {
      store.dispatch(CheckLogin({ token }));
    } else {
      store.dispatch(NoLogin());
    }
  }
}
