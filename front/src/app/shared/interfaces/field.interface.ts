import { FormGroup, ValidatorFn } from '@angular/forms';

type inputType = 'email' | 'text' | 'password' | 'tel' | 'url';
export type IFieldType = IButtonFieldConfig | ICheckBoxFieldConfig | IInputFieldConfig | ISelectFieldConfig;

export interface Field {
  config?: IFieldType;
  group: FormGroup;
}

export interface IFieldOptions {
  value: string;
  label: string;
}

export interface IFieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  type: string;
  value: boolean | string;
  validation?: ValidatorFn[];
}

export interface IButtonFieldConfig extends IFieldConfig {
  disabled: boolean;
  label: string;
}

export interface ICheckBoxFieldConfig extends IFieldConfig {
  label: string;
}

export interface IInputFieldConfig extends IFieldConfig {
  label: string;
  inputType?: inputType;
}

export interface ISelectFieldConfig extends IFieldConfig {
  placeholder: string;
  options: IFieldOptions[];
  selectWithFilter?: boolean;
}
