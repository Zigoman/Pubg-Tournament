import { Schema } from 'mongoose';
import { Auth } from '../Auth/auth';
import { IUser } from '../Interface/Interface';

export const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, lowercase: true, trim: true },
    password: String,
    isSquadLeader: Boolean,
    pubgID: { type: String, trim: true },
    pubgName: String,
    facebookURL: String,
    squad: { type: String, trim: true },
    isAdmin: { type: Boolean, default: false }
  },
  {
    collection: 'users'
  }
);

// Before saving the user, hash the password
userSchema.pre('save', function (next) {
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

// Hide the password when returning a user
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  }
});
