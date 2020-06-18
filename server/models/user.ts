import * as bcrypt from 'bcryptjs'
import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true, trim: true },
  password: String,
  isSquadLeader: Boolean,
  pubgID: { type: String, trim: true },
  pubgName: String,
  facebookURL: String,
  squad: { type: mongoose.Schema.Types.ObjectId, trim: true },
  isAdmin: { type: Boolean, default: false },
})

// Before saving the user, hash the password
userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error)
      }
      user.password = hash
      next()
    })
  })
})

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err)
    }
    callback(null, isMatch)
  })
}

// Omit the password when returning a user
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password
    return ret
  },
})

const User = mongoose.model('User', userSchema)

export default User
