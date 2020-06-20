import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, IFieldConfig } from '../../../interfaces/field.interface';

@Component({
  selector: 'pubg-calendar',
  template: `
    <div class="dynamic-field form-calendar" [formGroup]="group">
      <span class="ui-float-label">
        <p-calendar
          [formControlName]="config.name"
          [minDate]="minDate"
          [maxDate]="maxDate"
          dateFormat="dd/mm/yy"
          readonlyInput="true"
          showIcon="true"
          dataType="string"
        ></p-calendar>
        <label for="float-input">{{ config.label }}</label>
      </span>
    </div>
  `
})
export class CalendarComponent implements Field, OnInit {
  config: IFieldConfig;
  group: FormGroup;

  ngOnInit() {}

  get minDate() {
    return this.config.minDate === 'today'
      ? new Date()
      : this.config.minDate == null
      ? null
      : new Date(this.config.minDate);
  }

  get maxDate() {
    return this.config.maxDate === 'today'
      ? new Date()
      : this.config.maxDate == null
      ? null
      : new Date(this.config.maxDate);
  }
}

// <div class="dynamic-field form-input" [formGroup]="group">
//       <span class="ui-float-label">
//         <input [formControlName]="config.name" [value]="config.value|| '' " id="float-input" type="text" size="50" pInputText>
//         <label for="float-input">{{ config.label }}</label>
//       </span>
//     </div>
