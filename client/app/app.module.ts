import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './core/login/login.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutes} from './app.routing';
import {RouterModule} from '@angular/router';
import {AppGuard, StableApiGuard} from './shared/gurads/app.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    StableApiGuard,
    AppGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
