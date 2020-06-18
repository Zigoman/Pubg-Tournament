import * as jwt from 'jsonwebtoken'
import User from '../models/user'
import BaseCtrl from './base'

class UserCtrl extends BaseCtrl {
  model = User

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        return res.sendStatus(403)
      }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) {
          return res.sendStatus(403)
        }
        const token = jwt.sign({ user }, process.env.SECRET_TOKEN) // , { expiresIn: 10 } seconds
        res.status(200).json({ token })
      })
    })
  }

  // Get All Users
  getAllUsers = (req, res) => {
    this.model.find((err, users) => {
      if (err) {
        res.json(err)
      }
      res.json(users)
    })
  }

  // Add User
  addUser = (req, res) => {
    let user = new User(req.body)

    user
      .save()
      .then((user) => {
        res.status(200).json({ 'user added': user })
      })
      .catch((err) => {
        res.status(400).send('Unable to add user', err)
      })
  }

  // Get Single User By ID
  getSingleUser = (req, res) => {
    User.findById({ _id: req.params.id }, (err, user) => {
      if (err) {
        res.json(err)
      }
      res.json(user)
    })
  }

  // Update User
  updateUser = (req, res) => {
    const id = req.params.id
    User.findById(id, (err, userToUpdate) => {
      if (!userToUpdate) {
        res.json(err)
      } else {
        userToUpdate.username = req.body.username
        userToUpdate.email = req.body.email
        userToUpdate.isAdmin = req.body.isAdmin
        userToUpdate.isSquadLeader = req.body.isSquadLeader
        userToUpdate.password = req.body.password
        userToUpdate.pubgID = req.body.pubgID
        userToUpdate.pubgName = req.body.pubgName
        userToUpdate.squad = req.body.squad
        userToUpdate
          .save()
          .then((user) => {
            res.json({ 'User Successfull': user })
          })
          .catch((error) => {
            res.status(400).json({ 'Unable To Update': error })
          })
      }
    })
  }

  // Delete User
  deleteUser = (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err) => {
      if (err) res.json(err)
      res.json('User Removed')
    })
  }
}

export default UserCtrl
