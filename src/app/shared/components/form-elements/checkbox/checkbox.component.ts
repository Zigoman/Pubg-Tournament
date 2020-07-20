import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Field, ICheckBoxFieldConfig } from '../../../interfaces/field.interface';

@Component({
  selector: 'pubg-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements Field, OnInit {
  public config?: ICheckBoxFieldConfig;
  public group: FormGroup;
  public formControl: AbstractControl;

  constructor() {
    this.formControl = new FormControl({});
    this.group = new FormGroup({});
  }

  ngOnInit(): void {
    if (this.config) {
      this.formControl = this.group.controls[this.config.name];
    }
  }
}
