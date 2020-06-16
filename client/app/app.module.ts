import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { AppGuard, StableApiGuard } from './shared/gurads/app.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, SharedModule, BrowserAnimationsModule, HttpClientModule, RouterModule.forRoot(AppRoutes)],
  providers: [StableApiGuard, AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
