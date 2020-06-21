import { Schema } from 'mongoose';
import { Auth } from '../Auth/auth';
import { userSchema } from './user';

export const squadSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, default: null },
    members: { type: [userSchema], default: undefined },
    roomNumber: { type: Number, min: 1, max: 25 },
    protected: { type: Boolean, default: false },
    updated: { type: Date, default: Date.now }
  },
  {
    collection: 'squads'
  }
);

// Before saving the squad, hash the password
squadSchema.pre('save', function (next) {
  const saltRounds = 10;
  if (!this.isModified('password')) {
    return next();
  }
  Auth.hashPassword(this.password, saltRounds, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

// Omit the password when returning a squad
squadSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  }
});
