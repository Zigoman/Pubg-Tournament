export interface IUser {
  fullName?: string;
  email: string;
  password: string;
  isSquadLeader?: boolean;
  pubgID?: string;
  pubgName?: string;
  facebookURL?: string;
  squad?: string;
  isAdmin?: boolean;
}

export interface ISquad {
  name: string;
  password: string;
  members: any;
  roomNumber: number;
  protected: boolean;
  updated: string;
}
