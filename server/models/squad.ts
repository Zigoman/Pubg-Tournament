import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';

const squadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, default: null },
    members: { type: Array, default: undefined },
    roomNumber: { type: Number, min: 1, max: 25 },
    protected: { type: Boolean, default: false },
    updated: { type: Date, default: Date.now }
  },
  {
    collection: 'squads'
  }
);

// Before saving the squad, hash the password
squadSchema.pre('save', next => {
  if (this.password === null) {
    return next();
  }
  if (!this.isModified('password')) {
    return next();
  }
  const rounds = 10;
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

squadSchema.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

// Omit the password when returning a squad
squadSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  }
});

export const Squad = mongoose.model('Squad', squadSchema);
