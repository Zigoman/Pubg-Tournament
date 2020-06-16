export interface IActionMenu {
  mainTitle?: string;
  actions: IAction[];
  numbersOnly?: boolean;
}

export interface IAction {
  id?: number;
  action: any;
  text: string;
  icon?: string;
  attributes?: any;
  tooltip?: string;
  typeId?: any;
  subActions?: ISubAction[];
  onClick?(): void;
}

export interface ISubAction {
  id?: number;
  action: any;
  text: string;
  icon?: string;
}

export interface IIcon {
  action?: string;
  icon: string;
  size?: string;
  tooltip?: string;
  disabled?: boolean;
}

export interface IActionIcon {
  actionMenu: IActionMenu;
  action: string;
  icon: string;
  size?: string;
  tooltip?: string;
}

export interface IButton {
  action?: string;
  text: string;
  primary?: boolean;
  onClick?(): void;
}

export interface ITab {
  action: string;
  icon: string;
  text: string;
}

export declare type ITabs = ITab[];
