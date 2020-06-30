import * as jwt from 'jsonwebtoken';
import * as mongoose from 'mongoose';

import { BaseCtrl } from './base';
import { Auth } from '../Auth/auth';
import { userSchema } from '../models/user';
import { IUser } from '../Interface/Interface';

export class UserCtrl extends BaseCtrl {
  model = mongoose.model<IUser>('', userSchema);

  login = async (req, res) => {
    await this.model.findOne({ email: req.body.email }, async (err, user) => {
      if (user === null) {
        process.on('uncaughtException', () => {
          res.status(this.badRequest).send({ LoginError: 'No User Found' });
        });
        res.status(this.badRequest).send({ LoginError: 'No User Found' });
      } else if (user) {
        await Auth.compare(req.body.password, user.password, (error, isMatch) => {
          if (!isMatch) {
            return res.status(this.errorForbidden).send({ LoginError: 'Password is incorrect' });
          }
          // this object gets sent as token to the client
          const userForToken = {
            email: user.email,
            fullName: user.fullName
          };
          res
            .status(this.statusOk)
            // This Object is sent back to the client
            .send({
              email: user.email,
              password: jwt.sign(userForToken, process.env.SECRET_TOKEN),
              isSquadLeader: user.isSquadLeader,
              pubgID: user.pubgID,
              pubgName: user.pubgName,
              facebookURL: user.facebookURL,
              squad: user.squad
            });
        });
      }
    });
  };

  // Add User
  addUser = (req, res) => {
    const addUser = new this.model(req.body);
    // Check if user already exist in DB
    this.model.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
      if (user) {
        // Send back an Error if found user in DB
        res.status(this.badRequest).send({ error: 'user name already exist' });
      } else {
        // Save user to DB
        addUser
          .save()
          .then(() => {
            // this object gets sent as token to the client
            const userForToken = {
              email: addUser.email,
              fullName: addUser.fullName
            };
            res
              .status(this.statusOk)
              // This Object is sent back to the client
              .send({
                email: addUser.email,
                password: jwt.sign(userForToken, process.env.SECRET_TOKEN),
                isSquadLeader: addUser.isSquadLeader,
                pubgID: addUser.pubgID,
                pubgName: addUser.pubgName,
                facebookURL: addUser.facebookURL,
                squad: addUser.squad
              });
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
      if (err) res.send({ DeleteError: 'Could Not Delete User' });
      res.send({ Message: 'User Removed' });
    });
  };
}
