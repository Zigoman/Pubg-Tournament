import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  Type,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxComponent } from '../components/form-elements/checkbox/checkbox.component';
import { SelectComponent } from '../components/form-elements/select/select.component';
import { InputComponent } from '../components/form-elements/input/input.component';
import { ButtonComponent } from '../components/form-elements/button/button.component';
import { Field, IFieldType } from '../interfaces/field.interface';

const components: { [type: string]: Type<Field> } = {
  button: ButtonComponent,
  submit: ButtonComponent,
  input: InputComponent,
  select: SelectComponent,
  checkbox: CheckboxComponent
};

@Directive({
  selector: '[pubgDynamicField]'
})
export class PubgFieldDirective implements Field, OnInit {
  public inputConfig?: IFieldType;
  public inputGroup: FormGroup;
  private component?: ComponentRef<Field>;

  @Input()
  public set group(group: FormGroup) {
    this.inputGroup = group;
  }

  @Input()
  public set config(config: IFieldType) {
    this.inputConfig = config;
    const component = this.resolver.resolveComponentFactory<Field>(components[this.inputConfig.type]);
    this.component = this.container.createComponent(component);

    if (!components[this.inputConfig.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.inputConfig.type}).
        Supported types: ${supportedTypes}`
      );
    }
    this.component.instance.config = this.inputConfig;
    this.component.instance.group = this.inputGroup;
  }

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {
    this.inputGroup = new FormGroup({});
  }

  ngOnInit(): void {}
}
