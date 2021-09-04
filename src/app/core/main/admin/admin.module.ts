import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { SideMenuComponent } from '@core/main/admin/tournament-builder/side-menu/side-menu.component';
import { SideMenuItemComponent } from '@core/main/admin/tournament-builder/side-menu/side-menu-item/side-menu-item.component';
import { TournamentFormComponent } from '@core/main/admin/tournament-builder/tournament-form/tournament-form.component';
import { AdminComponent } from './admin.component';
import { TournamentBuilderComponent } from './tournament-builder/tournament-builder.component';
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
    TournamentBuilderComponent,
    TournamentFormComponent,
    UsersManagementComponent,
    SquadsManagementComponent,
    SideMenuComponent,
    SideMenuItemComponent
  ]
})
export class AdminModule {}
