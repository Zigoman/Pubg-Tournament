import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, IFieldConfig } from '../../../interfaces/field.interface';

@Component({
  selector: 'pubg-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements Field, OnInit {
  public config: IFieldConfig;
  public group: FormGroup;
  public formControl: any;
  public addFilter: boolean;

  constructor() {}

  ngOnInit(): void {
    this.formControl = this.group.controls[this.config.name];
    this.addFilter = this.config.selectWithFilter ? this.config.selectWithFilter : false;
  }
}
