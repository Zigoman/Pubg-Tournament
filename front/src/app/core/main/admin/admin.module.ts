import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { AdminComponent } from './admin.component';
import { TournamentBuilderComponent } from './tournament-builder/tournament-builder.component';
import { RouterModule } from '@angular/router';
import { adminRoutes } from './admin.routes';
import { UsersManagementComponent } from './users-management/users-management.component';
import { SquadsManagementComponent } from './squads-management/squads-management.component';
import { TournamentFormComponent } from './tournament-builder/tournament-form/tournament-form.component';
import { SideMenuComponent } from './tournament-builder/side-menu/side-menu.component';
import { SideMenuItemComponent } from './tournament-builder/side-menu/side-menu-item/side-menu-item.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(adminRoutes), SharedModule],
  declarations: [
    AdminComponent,
    SideMenuComponent,
    SideMenuItemComponent,
    TournamentBuilderComponent,
    UsersManagementComponent,
    SquadsManagementComponent,
    TournamentFormComponent
  ]
})
export class AdminModule {}
