import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IAction, IActionMenu } from '../../interfaces/actions';
import { HelpersService } from '../../services/helpers.service';
import { ActionMenuComponent } from '../action-menu/action-menu.component';

@Component({
  selector: 'pubg-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public actions: IActionMenu;
  public viewText: string;
  public multiActions: IAction[];
  public selectedSingleAction: IAction;
  public hasSubActions: boolean;
  @Input() bold: boolean;
  @Input() long: boolean;
  @Input() disabled: boolean;
  @Input() autoOpen: boolean;
  @Input() multi: boolean;
  @Input() applyFilter: boolean;
  @Output() actionSelect: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('opener', { static: true }) pubgOpener;
  @ViewChild(ActionMenuComponent, { static: true })
  public actionMenu: ActionMenuComponent;
  private multiTextArray: string[];
  private _TEXT: string;

  constructor() {
    this.multi = false;
    this.disabled = false;
    this.multiActions = [];
    this.applyFilter = false;
    this.multiTextArray = [];
    this.hasSubActions = false;
    this.bold = false;
  }

  @Input('text')
  set text(text: any) {
    if (text) {
      if (this.multi && Array.isArray(text)) {
        const tempActions = [];
        text.forEach(item => {
          tempActions.push(item.text);
        });
        this.viewText = tempActions.join(', ');
        this.multiTextArray = tempActions;
        this.actionMenu.enterSelectedItems(text);
        this.multiActions = text;
      } else {
        this._TEXT = text;
        this.viewText = this._TEXT;
      }
    }
  }

  @Input('actions')
  set inputActions(inputActions: IActionMenu) {
    if (inputActions) {
      this.actions = inputActions;
    }
  }

  ngOnInit() {
    this.viewText = this._TEXT;
    this.long = false;
  }

  public switchToggle(event) {
    if (!this.disabled) {
      this.pubgOpener.switchToggle(event);
    }
  }

  public actionSelected(event: IAction | any) {
    const tempText = event.text ? event.text : event.action.toLowerCase();

    if (this.multi) {
      // if that item is selected it will remove from selection
      if (HelpersService.containsObject(event, this.multiActions)) {
        this.multiTextArray = this.multiTextArray.filter(el => el !== tempText);
        this.multiActions = this.multiActions.filter(el => el.text !== event.text);
      } else {
        this.multiTextArray.push(tempText);
        this.multiActions.push(event);
      }

      this.multiActions.forEach(action => {
        if (action.hasOwnProperty('subAction') || action.hasOwnProperty('subActions')) {
          this.hasSubActions = true;
          return;
        }
        this.hasSubActions = false;
      });

      // if the selection list empty set the default value
      this.viewText = this.multiActions.length > 0 ? this.multiTextArray.join(', ') : this._TEXT;
    } else {
      this.viewText = tempText;
      this.selectedSingleAction = event;
      this.pubgOpener.toggleOff();
    }
  }

  public multiActionsSelected() {
    if (this.multiActions) {
      this.pubgOpener.toggleOff();
    }
  }

  public reset() {
    this.long = false;
    this.viewText = this._TEXT;
    this.actionMenu.reset();
    this.multiActions = [];
    this.selectedSingleAction = null;
    this.multiTextArray = [];
  }

  public show() {
    this.pubgOpener.toggleOn();
  }

  public beforeHidePanel() {
    if (this.multi) {
      this.actionSelect.emit(this.multiActions);
      if (this.selectedSingleAction) {
        this.actionSelect.emit(this.selectedSingleAction);
        this.selectedSingleAction = null;
      }
    }
  }

  public setSingleValue(event: IAction) {
    this.disabled = true;
    this.actionSelected(event);
  }
}
