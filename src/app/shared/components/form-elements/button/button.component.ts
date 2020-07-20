import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Field, IButtonFieldConfig } from '../../../interfaces/field.interface';

@Component({
  selector: 'pubg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements Field, OnInit {
  public config?: IButtonFieldConfig;
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
