import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { SquadComponent } from './squad/squad.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';

export const mainRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent,
        children: [
          { path: '', redirectTo: 'schedules', pathMatch: 'full' },
          { path: 'schedules', component: SchedulesComponent },
          { path: 'schedules/:roomId', component: RoomDashboardComponent },
          { path: 'squad', component: SquadComponent }
        ]
      }
    ]
  }
];
