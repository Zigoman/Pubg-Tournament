export interface ITab {
  action: string;
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
  items: ITabs;
}

export declare type ITabs = ITab[];
