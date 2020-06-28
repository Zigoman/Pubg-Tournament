export interface IIcon {
  action?: string;
  icon: string;
  size?: string;
  tooltip?: string;
  disabled?: boolean;
}

export interface ITab {
  action: string;
  icon: string;
  text: string;
}

export declare type ITabs = ITab[];
