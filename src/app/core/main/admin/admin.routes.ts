import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TournamentBuilderComponent } from './tournament-builder/tournament-builder.component';
import { SquadsManagementComponent } from './squads-management/squads-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';

export const adminRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AdminComponent,
        children: [
          { path: '', redirectTo: 'tournaments', pathMatch: 'full' },
          { path: 'tournaments', component: TournamentBuilderComponent },
          { path: 'users', component: UsersManagementComponent },
          { path: 'squads', component: SquadsManagementComponent }
        ]
      }
    ]
  }
];
