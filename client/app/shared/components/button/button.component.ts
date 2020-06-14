import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'pubg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() prime: boolean
  @Input() text: string
  @Input() action: string

  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<string>()

  constructor() {
    this.prime = false
    this.text = ''
  }

  public actionClicked(): void {
    this.buttonClicked.emit(this.action)
  }

  /*  use Like that */
  /*  <pubg-button [action]="'primeTest'" [prime]="false" [text]="'test'"></pubg-button>  */
}
