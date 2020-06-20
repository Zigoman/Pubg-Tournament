import { FormGroup, ValidatorFn } from '@angular/forms';

type inputType = 'email' | 'text' | 'password' | 'tel' | 'url';

export interface Field {
  config: IFieldConfig;
  group: FormGroup;
}

interface FieldOptions {
  value: string;
  label: string;
}

export interface IFieldConfig {
  disabled?: boolean;
  label?: string;
  name: string;
  options?: FieldOptions[];
  placeholder?: string;
  type: string;
  inputType?: inputType;
  validation?: ValidatorFn[];
  value?: any;
  minDate?: string;
  maxDate?: string;
  selectWithFilter?: boolean;
}
