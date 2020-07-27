import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IFieldType, IFieldOptions, IFormObject } from '../../interfaces/field.interface';

@Component({
  selector: 'pubg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public config?: IFieldType[];
  public oldObjectValues: { [key: string]: string | boolean };

  @Input()
  public set inputConfig(config: IFieldType[]) {
    if (this.form && config) {
      this.config = config;
      const controls = Object.keys(this.form.controls);
      const configControls: string[] = this.controls.map(item => item.name);
      this.oldObjectValues = this.config.reduce((prev, curr: IFieldType) => ({ ...prev, [curr.name]: curr.value }), {});
      controls.forEach(control => this.form.removeControl(control));
      configControls.forEach(name => {
        if (name) {
          const controlConfig = config.find(control => control.name === name);
          if (controlConfig) {
            this.form.addControl(name, this.createControl(controlConfig));
          }
        }
      });
    }
  }

  @Output()
  formSubmit: EventEmitter<IFormObject> = new EventEmitter<IFormObject>();

  @Output()
  formValueChanges: EventEmitter<IFieldOptions> = new EventEmitter<IFieldOptions>();

  get controls(): IFieldType[] {
    return this.config ? this.config.filter(({ type }) => type !== 'button') : [];
  }

  get valid(): boolean {
    return this.form.valid;
  }

  public get value(): IFormObject {
    return this.form ? this.form.value : null;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.createGroup();
    this.config = [];
    this.oldObjectValues = {};
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(val => {
      this.emitChangedValues(val);
    });
  }

  public createGroup(): FormGroup {
    const group = this.fb.group({});
    if (this.controls.length > 0) {
      this.controls.forEach(control => {
        if (control.name) {
          group.addControl(control.name, this.createControl(control));
        }
      });
    }

    return group;
  }

  public createControl(controlConfig: IFieldType): FormControl {
    const { disabled, validation, value } = controlConfig;
    return this.fb.control({ disabled, value }, validation);
  }

  public handleSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.formSubmit.emit(this.value);
  }

  public setDisabled(name: string, disable: boolean): void {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
    }

    this.config = this.config?.map(item => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  public emitChangedValues(newValues: { [key: string]: string }): void {
    Object.keys(newValues).forEach(name => {
      if (newValues[name] !== this.oldObjectValues[name]) {
        this.oldObjectValues = newValues;
        this.formValueChanges.emit({ label: name, value: newValues[name] });
      }
    });
  }
}
