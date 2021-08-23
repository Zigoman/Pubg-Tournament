export interface ITab {
  action: string;
  text: string;
  title?: string;
}

export interface ISideMenuItem {
  action: string | number;
  text: string;
  title?: string;
}

export interface ISideMenu {
  title: string | null;
  sections: ISideMenuSection[];
}

export interface ISideMenuSection {
  title: string;
  color: string;
  items: ISideMenuItems;
}

export declare type ITabs = ITab[];

export declare type ISideMenuItems = ISideMenuItem[];
