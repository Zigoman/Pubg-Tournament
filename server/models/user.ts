import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: String,
  isSquadLeader: Boolean,
  pubgID: { type: String, trim: true },
  pubgName: String,
  facebookURL: String,
  squad: { type: mongoose.Schema.Types.ObjectId, trim: true },
  isAdmin: { type: Boolean, default: false }
});

// Before saving the user, hash the password
userSchema.pre('save', next => {
  const rounds = 10;

  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(rounds, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }
      this.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// Omit the password when returning a user
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  }
});

export const User = mongoose.model('User', userSchema);
