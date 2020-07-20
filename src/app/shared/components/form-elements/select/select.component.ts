import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Field, ISelectFieldConfig } from '../../../interfaces/field.interface';

@Component({
  selector: 'pubg-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements Field, OnInit {
  public config?: ISelectFieldConfig;
  public group: FormGroup;
  public formControl: AbstractControl;
  public addFilter: boolean;

  constructor() {
    this.formControl = new FormControl({});
    this.group = new FormGroup({});
    this.addFilter = false;
  }

  ngOnInit(): void {
    if (this.config) {
      this.formControl = this.group.controls[this.config.name];
      this.addFilter = this.config.selectWithFilter ? this.config.selectWithFilter : false;
    }
  }
}
