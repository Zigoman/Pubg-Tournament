import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { KEY_CODE } from '../../enums/key-type.enum';

@Component({
  selector: 'pubg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputTextComponent implements OnInit {
  public pattern: RegExp;
  public elementID: string;
  @Input() emitOnAnyKey: boolean;
  @Input() useFocusedOut: boolean;
  @Input() placeholder: string;
  @Input() label: string;
  @Output() text: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('input') Input: ElementRef;
  private type: string;

  constructor() {
    this.emitOnAnyKey = false;
    this.type = 'string';
    this.useFocusedOut = true;
    this.placeholder = 'Enter Value';
    this.label = null;
  }

  @Input('filter')
  set filter(filter: string) {
    switch (filter) {
      default:
        this.pattern = null;
        this.type = 'string';
    }
  }

  @Input('InputText')
  set InputText(text: any) {
    if (text !== 'value') {
      this.Input.nativeElement.value = text;
    }
  }

  @Input('startWithFocus')
  set startWithFocus(focus: boolean) {
    if (focus) {
      this.Input.nativeElement.focus();
    }
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyUp(value) {
    if (this.pattern) {
      this.Input.nativeElement.value = value.replace(this.pattern, '');
    }
  }

  ngOnInit() {
    this.elementID = this.randomID();
  }

  public sendText(event: string = '') {
    let valueToSendBefore;
    let valueToSendAfter;
    const index = event.indexOf('.');

    if (this.pattern) {
      valueToSendBefore = event.replace(this.pattern, '');
      if (index > -1) {
        valueToSendBefore = event.substr(0, index + 1) + event.slice(index).replace(/\./g, '');
      }
      this.Input.nativeElement.value = valueToSendBefore;
    } else {
      valueToSendBefore = event;
    }
    valueToSendAfter = this.type === 'number' ? parseFloat(valueToSendBefore) : valueToSendBefore;
    this.text.emit(valueToSendAfter);
  }

  public sendTextByKeyPress(event: any, value: string) {
    if (event.key === KEY_CODE.ENTER && !this.emitOnAnyKey) {
      this.sendText(value);
    } else if (this.emitOnAnyKey) {
      this.sendText(value);
    }
  }

  public reset() {
    this.Input.nativeElement.value = '';
  }

  public randomID() {
    const max = 9;
    const min = 2;
    return '_' + Math.random().toString(5).substr(min, max);
  }
}
