const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'please provide your name'],
      lowercase: true,
      trim: true
    },
    email: {
      type: String,
      required: [true, 'please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
      trim: true
    },
    password: {
      type: String,
      required: [true, 'please provide a password'],
      select: false
    },
    pubgID: {
      type: String,
      trim: true
    },
    pubgName: {
      type: String
    },
    facebookURL: {
      type: String,
      trim: true
    },
    role: {
      type: String,
      enum: ['user', 'squadLeader', 'admin'],
      default: 'user',
      select: false
    },
    active: {
      type: Boolean,
      default: true,
      select: false
    },
    admin: {
      type: Boolean,
      default: false
    },
    isSquadLeader: {
      type: Boolean,
      default: false
    }
  },
  {
    collection: 'users',
    versionKey: false
  }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.methods.correctPassword = function (candidatePassword, userPassword) {
  return bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model('User', UserSchema);
