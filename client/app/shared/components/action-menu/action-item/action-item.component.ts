import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAction, ISubAction } from '../../../interfaces/actions';

@Component({
  selector: 'pubg-action-item',
  templateUrl: './action-item.component.html',
  styleUrls: ['./action-item.component.scss']
})
export class ActionItemComponent implements OnInit {
  @Input() multi: boolean;
  @Input() disabled: boolean;
  @Input() filterTerm: string;
  @Input() selectedItem: boolean;

  @Output() selectedAction: EventEmitter<any> = new EventEmitter();
  public action: IAction;
  public subMenuOpen: boolean;

  constructor() {
    this.multi = false;
    this.disabled = false;
  }

  @Input('action')
  set inputAction(action: IAction) {
    if (action) {
      this.action = action;
    }
  }

  ngOnInit() {
    this.selectedItem = false;
    this.subMenuOpen = false;
  }

  public actionClicked(action: IAction) {
    if (!this.disabled) {
      this.toggle();
      this.selectedAction.emit(action);
    }
  }

  public toggleSubMenu(action: IAction) {
    if (action.subActions) {
      this.subMenuOpen = !this.subMenuOpen;
    }
  }

  public toggle() {
    this.selectedItem = this.multi ? !this.selectedItem : false;
  }

  public insertSelectedItem() {
    this.selectedItem = true;
    // this._CD.markForCheck();
  }

  public reset() {
    this.selectedItem = false;
    // this._CD.markForCheck();
  }
}
