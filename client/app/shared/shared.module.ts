import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModalComponent } from './components/modal/modal.component'
import { ExternalService } from './services/external.service'
import { ClickOutsideDirective } from './directives/click-outside.directive'
import { ExpendNodeComponent } from './components/modal/expend-node/expend-node.component'
import { IconButtonComponent } from './components/icon-button/icon-button.component'
import { KeyPressDirective } from './directives/key-press.directive'
import { FormsModule } from '@angular/forms'
import { ContextMenuComponent } from './components/context-menu/context-menu.component'
import { SubActionItemComponent } from './components/action-menu/action-item/sub-action-item/sub-action-item.component'
import { ModalsService } from './services/modals.service'
import { LoaderService } from './services/loader.service'
import { ClickOutsideService } from './services/click-outside.service'
import { FilterByPipe } from './pipes/filter-by.pipe'
import { IconActionMenuComponent } from './components/icon-action-menu/icon-action-menu.component'
import { HelpersService } from './services/helpers.service'
import { ActionMenuComponent } from './components/action-menu/action-menu.component'
import { ActionItemComponent } from './components/action-menu/action-item/action-item.component'
import { ButtonComponent } from './components/button/button.component'
import { OpenerComponent } from './components/opener/opener.component'
import { CheckBoxComponent } from './components/checkbox/checkbox.component'
import { DropdownComponent } from './components/dropdown/dropdown.component'
import { InputTextComponent } from './components/input/input.component'
import { LoaderComponent } from './components/loader/loader.component'
import { TableComponent } from './components/table/table.component'
import { TableModule } from 'primeng/table'
import { TabsComponent } from './components/tabs/tabs.component'
import { TabComponent } from './components/tabs/tab/tab.component'
import { CalendarModule } from 'primeng/calendar'
import { OverlayPanelModule } from 'primeng/overlaypanel'

const components = [
  IconActionMenuComponent,
  ModalComponent,
  ClickOutsideDirective,
  ExpendNodeComponent,
  IconButtonComponent,
  KeyPressDirective,
  ContextMenuComponent,
  FilterByPipe,
  ActionMenuComponent,
  ActionItemComponent,
  SubActionItemComponent,
  ButtonComponent,
  OpenerComponent,
  CheckBoxComponent,
  DropdownComponent,
  InputTextComponent,
  LoaderComponent,
  TableComponent,
  TabsComponent,
  TabComponent,
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    OverlayPanelModule,
    TableModule,
  ],
  declarations: [components, TabsComponent, TabComponent],
  exports: [CommonModule, ...components],
  providers: [
    ExternalService,
    ModalsService,
    LoaderService,
    ClickOutsideService,
    HelpersService,
  ],
})
export class SharedModule {}
