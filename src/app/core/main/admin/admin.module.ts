import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AdminComponent } from './admin.component';
import { TournamentBuilderComponent } from './tournament-builder/tournament-builder.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { UsersManagementComponent } from './users-management/users-management.component';
import { SquadsManagementComponent } from './squads-management/squads-management.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoutes), SharedModule],
  declarations: [AdminComponent, TournamentBuilderComponent, UsersManagementComponent, SquadsManagementComponent]
})
export class AdminModule {}
