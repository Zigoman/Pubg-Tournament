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
import { OverlayPanelModule } from 'primeng';
import { PubgFormModule } from './components/form-elements/form.module';

const components = [ModalComponent, IconButtonComponent, LoaderComponent, TabsComponent];

@NgModule({
  imports: [CommonModule, OverlayPanelModule, PubgFormModule, CountdownModule, MomentModule],
  declarations: [components],
  exports: [CommonModule, PubgFormModule, CountdownModule, MomentModule, ...components],
  providers: [ClickOutsideService, HelpersService]
})
export class SharedModule {}
