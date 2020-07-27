import * as moment from 'moment';

export interface IUser {
  fullName?: string;
  email?: string;
  password: string;
  isSquadLeader?: boolean;
  pubgID?: string;
  pubgName?: string;
  facebookURL?: string;
  squad?: string | null;
  admin?: boolean;
}

export interface IPlayer {
  fullName?: string;
  email?: string;
  password?: string;
  isSquadLeader?: boolean;
  pubgID?: string;
  pubgName?: string;
  facebookURL?: string;
  squad?: string | null;
  admin?: boolean;
}

export interface ISquad {
  name: string;
  password: string;
  members: IPlayer[];
  roomNumber: number;
  protected: boolean;
  updated: string;
}

export interface ITeam {
  teamNumber: number;
  teamSquadID: number;
  squadLogo: string;
  squadName: string;
  squadActivePlayers: IPlayer[];
  squadSubPlayers: IPlayer[];
}

export interface IRoom {
  startAt: moment.Moment;
  number: number | null;
  password: number | null;
  mapName: mapNames;
  roomId: number;
  teams?: ITeam[];
}

export interface ISchedule {
  date: moment.Moment;
  name: string;
  roomList: IRoom[];
}

type mapNames = 'Miramar' | 'Sanhok' | 'Vikendi' | 'Erangel';
