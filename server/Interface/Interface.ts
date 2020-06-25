import { Document } from 'mongoose';

export interface IUser extends Document {
  fullName: { type: string; required: true };
  email: { type: string; unique: true; lowercase: true; trim: true };
  password: string;
  isSquadLeader: boolean;
  pubgID: { type: string; trim: true };
  pubgName: string;
  facebookURL: string;
  squad: { type: string; trim: true };
  isAdmin: { type: boolean; default: false };
}

export interface ISquad extends Document {
  name: { type: string; required: true };
  password: { type: string; default: null };
  members: { type: any; default: undefined };
  roomNumber: { type: number };
  protected: { type: boolean; default: false };
  updated: { type: Date };
}
