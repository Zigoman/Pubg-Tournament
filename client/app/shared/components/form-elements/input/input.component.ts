import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field, IFieldConfig } from '../../../interfaces/field.interface';
import { HelpersService } from '../../../services/helpers.service';

@Component({
  selector: 'pubg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements Field, OnInit {
  public config: IFieldConfig;
  public group: FormGroup;
  public elementID: string;
  public formControl: any;
  public onFocusInput: boolean;

  constructor(public helperSrv: HelpersService) {}

  ngOnInit(): void {
    this.onFocusInput = false;
    this.elementID = this.helperSrv.randomID();
    this.formControl = this.group.controls[this.config.name];
  }

  public onFocus() {
    this.onFocusInput = true;
  }

  public onBlur() {
    this.onFocusInput = false;
  }
}
