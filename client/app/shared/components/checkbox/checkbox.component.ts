import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'pubg-checkbox',
  templateUrl: './checkBox.component.html',
  styleUrls: ['./checkBox.component.scss'],
})
export class CheckBoxComponent {
  public checkBoxOn: boolean

  @Input() label: string

  @Output() checkBoxChanged: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {
    this.checkBoxOn = false
  }

  @Input('checkBox')
  set checkBox(value: boolean) {
    this.checkBoxOn = value
  }

  public checkBoxClicked() {
    this.checkBoxOn = !this.checkBoxOn
    this.checkBoxChanged.emit(this.checkBoxOn)
  }

  public reset() {
    this.checkBoxOn = false
  }

  // how to use
  // <pubg-checkbox [label]="'Not'" [checkBox]="false" (checkBoxChanged)='grubHereTheAnswer()'></pubg-checkBox>
}
