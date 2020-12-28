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
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuItemComponent } from './components/side-menu/side-menu-item/side-menu-item.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { DynamicFormsPrimeNGUIModule } from '@ng-dynamic-forms/ui-primeng';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  ModalComponent,
  IconButtonComponent,
  LoaderComponent,
  TabsComponent,
  SideMenuComponent,
  SideMenuItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    DynamicFormsPrimeNGUIModule,
    CountdownModule,
    MomentModule,
    FullCalendarModule
  ],
  declarations: [components],
  exports: [
    CommonModule,
    CountdownModule,
    MomentModule,
    DynamicFormsPrimeNGUIModule,
    FullCalendarModule,
    ...components
  ],
  providers: [ClickOutsideService, HelpersService, LoaderService]
})
export class SharedModule {}
