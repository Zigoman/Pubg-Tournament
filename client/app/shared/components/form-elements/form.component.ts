import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
  Output
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IFieldConfig } from '../../interfaces/field.interface';

@Component({
  selector: 'pubg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, DoCheck {
  public form: FormGroup;
  private differ: KeyValueDiffer<string, any>;

  @Input()
  config: IFieldConfig[] = [];

  @Output()
  formSubmit: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  formValueChanges: EventEmitter<any> = new EventEmitter<any>();

  get controls() {
    return this.config.filter(({ type }) => type !== 'button');
  }

  get changes() {
    return this.form.valueChanges;
  }

  get valid() {
    return this.form.valid;
  }

  public get value() {
    return this.form ? this.form.value : null;
  }

  constructor(private fb: FormBuilder, private differs: KeyValueDiffers) {}

  ngOnInit() {
    this.form = this.createGroup();
    this.differ = this.differs.find({}).create();
  }

  ngDoCheck() {
    if (this.form) {
      const controls = Object.keys(this.form.controls);
      const configControls = this.controls.map(item => item.name);

      controls
        .filter(control => !configControls.includes(control))
        .forEach(control => this.form.removeControl(control));

      configControls
        .filter(control => !controls.includes(control))
        .forEach(name => {
          const config = this.config.find(control => control.name === name);
          this.form.addControl(name, this.createControl(config));
        });
    }

    const change = this.differ.diff(this.value);
    if (change) {
      change.forEachChangedItem(item => {
        this.formValueChanges.emit(item);
      });
    }
  }

  public createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    return group;
  }

  public createControl(config: IFieldConfig) {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  public handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.formSubmit.emit(this.value);
  }

  public setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.config.map(item => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  public setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }
}
