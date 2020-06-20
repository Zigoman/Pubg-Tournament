import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';

import { BaseCtrl } from './base';
import { Auth } from '../Auth/auth';
import { userSchema } from '../models/user';
import { IUser } from '../Interface/Interface';

export class UserCtrl extends BaseCtrl {
  model = mongoose.model<IUser>('', userSchema);

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) {
        res.sendStatus(this.badRequest);
      }
      Auth.compare(req.body.password, user.password, (error, isMatch) => {
        if (!isMatch) {
          return res.status(this.errorForbidden).send(error);
        }
        const token = jwt.sign({ user }, process.env.SECRET_TOKEN);
        res.status(this.statusOk).send(token);
      });
    });
  };

  // Get All Users
  getAllUsers = (req, res) => {
    this.model.find((err, users) => {
      if (err) {
        res.send(err);
      }
      res.send(users);
    });
  };

  // Add User
  addUser = (req, res) => {
    const addUser = new this.model(req.body);
    addUser
      .save()
      .then(user => {
        res.status(this.statusOk).send(user);
      })
      .catch(err => {
        res.status(this.errorForbidden).send(err);
      });
  };

  // Get Single User By ID
  getSingleUser = (req, res) => {
    this.model.findById({ _id: req.params.id }, (err, user) => {
      if (err) {
        res.json(err);
      }
      res.json(user);
    });
  };

  // Update User
  updateUser = (req, res) => {
    const id = req.params.id;
    this.model.findById(id, (err, userToUpdate) => {
      if (!userToUpdate) {
        res.json(err);
      } else {
        userToUpdate.username = req.body.username;
        userToUpdate.email = req.body.email;
        userToUpdate.isAdmin = req.body.isAdmin;
        userToUpdate.isSquadLeader = req.body.isSquadLeader;
        userToUpdate.password = req.body.password;
        userToUpdate.pubgID = req.body.pubgID;
        userToUpdate.pubgName = req.body.pubgName;
        userToUpdate.squad = req.body.squad;
        userToUpdate
          .save()
          .then(user => {
            res.json({ 'User Successfull': user });
          })
          .catch(error => {
            res.status(this.errorForbidden).json({ 'Unable To Update': error });
          });
      }
    });
  };

  // Delete User
  deleteUser = (req, res) => {
    this.model.findByIdAndDelete({ _id: req.params.id }, err => {
      if (err) res.json(err);
      res.json('User Removed');
    });
  };
}
