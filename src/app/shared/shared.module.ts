import { LoaderService } from './services/loader.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { ClickOutsideService } from './services/click-outside.service';
import { HelpersService } from './services/helpers.service';
import { LoaderComponent } from './components/loader/loader.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CountdownModule } from 'ngx-countdown';
import { MomentModule } from 'ngx-moment';
import { SideMenuItemComponent } from '../core/main/admin/tournament-builder/side-menu/side-menu-item/side-menu-item.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { DynamicFormsPrimeNGUIModule } from '@ng-dynamic-forms/ui-primeng';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';

const components = [ModalComponent, IconButtonComponent, LoaderComponent, TabsComponent];

@NgModule({
  imports: [
    CommonModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    DynamicFormsPrimeNGUIModule,
    CountdownModule,
    MomentModule,
    FullCalendarModule,
    ButtonModule,
    DynamicDialogModule
  ],
  declarations: [components],
  exports: [
    CommonModule,
    CountdownModule,
    ReactiveFormsModule,
    MomentModule,
    DynamicFormsPrimeNGUIModule,
    FullCalendarModule,
    ButtonModule,
    DynamicDialogModule,
    ...components
  ],
  providers: [ClickOutsideService, HelpersService, LoaderService, DialogService]
})
export class SharedModule {}
