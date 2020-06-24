import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { AppGuard } from './shared/gurads/app.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        canActivate: [AppGuard],
        loadChildren: () => import('./core/main/main.module').then(m => m.MainModule)
      },
      {
        path: 'login',
        component: LoginComponent
      }
      // {
      //     path: 'error',
      //     component: ErrorComponent
      //     // canActivate: [AppGuard],
      // },
    ]
  }
];
