import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';

import { BaseCtrl } from './base';
import { Auth } from '../Auth/auth';
import { userSchema } from '../models/user';
import { IUser } from '../Interface/Interface';

export class UserCtrl extends BaseCtrl {
  model = mongoose.model<IUser>('', userSchema);

  login = async (req, res) => {
    await this.model.findOne({ email: req.body.LoginEmail }, (err, user) => {
      if (user === null) {
        process.on('uncaughtException', () => {
          res.status(this.badRequest).json('No User Found');
        });
      }
      Auth.compare(req.body.loginPassword, user.password, (error, isMatch) => {
        if (!isMatch) {
          return res.status(this.errorForbidden).send(error);
        }
        const token = jwt.sign({ user }, process.env.SECRET_TOKEN);
        res.status(this.statusOk).json({ myToken: token });
      });
    });
  };
  // Add User
  addUser = (req, res) => {
    const addUser = new this.model(req.body);
    this.model.findOne({ fullName: req.body.fullName.toLowerCase() }, (err, user) => {
      if (user) {
        res.status(this.badRequest).json({ err: 'user name already exist' });
      } else {
        addUser
          .save()
          .then(() => {
            const token = jwt.sign({ addUser }, process.env.SECRET_TOKEN);
            res.status(this.statusOk).json({ myToken: token });
          })
          .catch(error => {
            res.status(this.errorForbidden).send(error);
          });
      }
    });
  };

  // Get All Users
  getAllUsers = async (req, res) => {
    await this.model.find((err, users) => {
      if (err) {
        res.send(err);
      }
      res.send(users);
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
        res.json({ error: err });
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
