import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainRoutes } from './main.routes';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../../shared/shared.module';
import { SchedulesComponent } from './schedules/schedules.component';
import { SquadComponent } from './squad/squad.component';
import { RoomComponent } from './schedules/room/room.component';
import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';
import { TeamComponent } from './room-dashboard/team/team.component';
import { PlayerComponent } from './room-dashboard/team/player/player.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mainRoutes), SharedModule],
  providers: [],
  declarations: [
    MainComponent,
    NavBarComponent,
    SchedulesComponent,
    SquadComponent,
    RoomComponent,
    RoomDashboardComponent,
    TeamComponent,
    PlayerComponent
  ]
})
export class MainModule {}
