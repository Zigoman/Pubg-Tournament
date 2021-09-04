import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AppGuard } from './shared/gurads/app.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canActivate: [AppGuard],
        loadChildren: async () => import('./core/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
