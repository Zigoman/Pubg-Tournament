import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, IFieldConfig } from '../../../interfaces/field.interface';

@Component({
  selector: 'pubg-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements Field, OnInit {
  public config: IFieldConfig;
  public group: FormGroup;
  public formControl: any;

  constructor() {}

  ngOnInit(): void {
    this.formControl = this.group.controls[this.config.name];
  }
}
