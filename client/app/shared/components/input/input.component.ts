import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { KEY_CODE } from '../../enums/key-type.enum'

@Component({
  selector: 'pubg-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputTextComponent implements OnInit {
  public pattern: RegExp
  public maxMin: number[]
  public elementID: string;
  @Input() emitOnAnyKey: boolean
  @Input() useFocusedOut: boolean
  @Input() placeholder: string;
  @Input() label: string;
  @Output() text: EventEmitter<string> = new EventEmitter<string>()
  @ViewChild('input') Input: ElementRef
  private type: string

  constructor() {
    this.emitOnAnyKey = false
    this.type = 'string'
    this.useFocusedOut = true
    this.placeholder = 'Enter Value';
    this.label = null;
  }

  @Input('filter')
  set filter(filter: string) {
    switch (filter) {
      case 'Int16':
        this.pattern = /[^-0-9]/g
        this.maxMin = [-32768, 32767]
        this.type = 'number'
        break
      case 'Int32':
        this.pattern = /[^-0-9]/g
        this.maxMin = [-2147483648, 2147483647]
        this.type = 'number'
        break
      case 'Int64':
        this.pattern = /[^-0-9]/g
        this.maxMin = [-9223372036854775808, 9223372036854775807]
        this.type = 'number'
        break
      case 'Decimal':
        this.pattern = /[^-0-9.]/g
        this.maxMin = [-9223372036854775808, 9223372036854775807]
        this.type = 'number'
        break
      default:
        this.pattern = null
        this.type = 'string'
    }
  }

  @Input('InputText')
  set InputText(text: any) {
    if (text !== 'value') {
      this.Input.nativeElement.value = text
    }
  }

  @Input('startWithFocus')
  set startWithFocus(focus: boolean) {
    if (focus) {
      this.Input.nativeElement.focus()
    }
  }

  @HostListener('keyup', ['$event.target.value'])
  onKeyUp(value) {
    if (this.pattern) {
      this.Input.nativeElement.value = value.replace(this.pattern, '')
    }
  }

  ngOnInit() {
    this.elementID = this.randomID();
  }

  public sendText(event: string = '') {
    let valueToSendBefore
    let valueToSendAfter
    const index = event.indexOf('.')

    if (this.pattern) {
      valueToSendBefore = event.replace(this.pattern, '')
      if (index > -1) {
        valueToSendBefore =
          event.substr(0, index + 1) + event.slice(index).replace(/\./g, '')
      }
      this.Input.nativeElement.value = valueToSendBefore
    } else {
      valueToSendBefore = event
    }

    if (this.type === 'number') {
      valueToSendAfter = parseFloat(valueToSendBefore)
    } else {
      valueToSendAfter = valueToSendBefore
    }
    this.text.emit(valueToSendAfter)
  }

  public sendTextByKeyPress(event: any, value: string) {
    if (event.key === KEY_CODE.ENTER && !this.emitOnAnyKey) {
      this.sendText(value)
    } else if (this.emitOnAnyKey) {
      this.sendText(value)
    }
  }

  public reset() {
    this.Input.nativeElement.value = ''
  }

  public randomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
