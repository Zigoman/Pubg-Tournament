import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Field, IInputFieldConfig } from '../../../interfaces/field.interface';
import { HelpersService } from '../../../services/helpers.service';

@Component({
  selector: 'pubg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements Field, OnInit {
  public config?: IInputFieldConfig;
  public group: FormGroup;
  public elementID: string;
  public onFocusInput: boolean;
  public formControl: AbstractControl;

  constructor(public helperSrv: HelpersService) {
    this.elementID = this.helperSrv.randomID();
    this.formControl = new FormControl('');
    this.group = new FormGroup({});
    this.onFocusInput = false;
  }

  ngOnInit(): void {
    if (this.config) {
      this.elementID = this.helperSrv.randomID();
      this.formControl = this.group.controls[this.config.name];
    }
  }

  public onFocus(): void {
    this.onFocusInput = true;
  }

  public onBlur(): void {
    this.onFocusInput = false;
  }
}
