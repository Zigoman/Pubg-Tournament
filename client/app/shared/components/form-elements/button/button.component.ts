import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, IFieldConfig } from '../../../interfaces/field.interface';

@Component({
  selector: 'pubg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements Field, OnInit {
  config: IFieldConfig;
  group: FormGroup;
  public formControl: any;

  constructor() {}

  ngOnInit(): void {
    this.formControl = this.group.controls[this.config.name];
  }
}
