import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CalendarModule, CheckboxModule, DropdownModule, InputTextModule } from 'primeng';
import { PubgFieldDirective } from '../../directives/field.directive';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    CalendarModule
  ],
  declarations: [
    PubgFieldDirective,
    FormComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent
  ],
  exports: [FormComponent],
  entryComponents: [ButtonComponent, InputComponent, SelectComponent, CheckboxComponent]
})
export class PubgFormModule {}
