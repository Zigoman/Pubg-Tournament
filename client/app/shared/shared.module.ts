import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ExpendNodeComponent } from './components/modal/expend-node/expend-node.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { KeyPressDirective } from './directives/key-press.directive';
import { ModalsService } from './services/modals.service';
import { ClickOutsideService } from './services/click-outside.service';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { HelpersService } from './services/helpers.service';
import { LoaderComponent } from './components/loader/loader.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { OverlayPanelModule, TableModule } from 'primeng';
import { PubgFormModule } from './components/form-elements/form.module';

const components = [
  ModalComponent,
  ClickOutsideDirective,
  ExpendNodeComponent,
  IconButtonComponent,
  KeyPressDirective,
  FilterByPipe,
  LoaderComponent,
  TabsComponent,
  TabComponent
];

@NgModule({
  imports: [CommonModule, OverlayPanelModule, TableModule, PubgFormModule],
  declarations: [components, TabsComponent, TabComponent],
  exports: [CommonModule, PubgFormModule, ...components],
  providers: [ModalsService, ClickOutsideService, HelpersService]
})
export class SharedModule {}
