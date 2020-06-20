import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CalendarComponent } from '../components/form-elements/calendar/calendar.component';
import { CheckboxComponent } from '../components/form-elements/checkbox/checkbox.component';
import { SelectComponent } from '../components/form-elements/select/select.component';
import { InputComponent } from '../components/form-elements/input/input.component';
import { ButtonComponent } from '../components/form-elements/button/button.component';
import { Field, IFieldConfig } from '../interfaces/field.interface';

const components: { [type: string]: Type<Field> } = {
  button: ButtonComponent,
  input: InputComponent,
  select: SelectComponent,
  checkbox: CheckboxComponent,
  datepicker: CalendarComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class PubgFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: IFieldConfig;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
