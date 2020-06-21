import { squadSchema } from '../models/squad';
import * as mongoose from 'mongoose';
import { BaseCtrl } from './base';
import { ISquad, IUser } from '../Interface/Interface';
import { userSchema } from '../models/user';

export class SquadCtrl extends BaseCtrl {
  model = mongoose.model<ISquad>('Squad', squadSchema);
  users = mongoose.model<IUser>('', userSchema);
  // Add Squad
  addSquad = (req, res) => {
    const squadRequest = new this.model(req.body);

    squadRequest
      .save()
      .then(squad => {
        res.status(this.statusOk).send(squad);
      })
      .catch(err => {
        res.status(this.badRequest).send(err);
      });
  };

  // Get All Squads
  getAllSquads = (req, res) => {
    this.model.find((err, squads) => {
      if (err) {
        res.send(err);
      }
      res.send(squads);
    });
  };

  // Get Squad By ID
  getSingleSquad = (req, res) => {
    this.model.findById({ _id: req.params.id }, (err, squad) => {
      if (err) {
        res.send(err);
      }
      res.send(squad);
    });
  };

  addSquadMember = async (req, res) => {
    const maxSquadMembers = 6;
    let user: any = {};

    await this.users.findOne({ _id: req.body.memberToAdd }, (err, userFound) => {
      if (!userFound) {
        user = null;
      }
      user = userFound;
    });

    this.model.findOne({ _id: req.params.id }, (err, squadToUpdate) => {
      if (!squadToUpdate) {
        res.status(this.badRequest).send(err);
      }
      if (!squadToUpdate.members) {
        squadToUpdate.members = [];
      }
      if (squadToUpdate.members.length <= maxSquadMembers && user !== null) {
        squadToUpdate.members.push(user);
        squadToUpdate
          .save()
          .then(() => {
            res.status(this.statusOk).send('Added Member To Squad');
          })
          .catch(error => {
            res.status(this.badRequest).send(error.message);
          });
      } else {
        res.status(this.badRequest).send('Could Not Add Member');
      }
    });
  };

  // Update Squad - Name
  updateSquadName = (req, res) => {
    const id = req.params.id;
    this.model.findById(id, (err: Error, squadToUpdate) => {
      if (!squadToUpdate) {
        res.send(err.message);
      } else {
        squadToUpdate.name = req.body.name;
        squadToUpdate.updated = Date.now();
        squadToUpdate
          .save()
          .then(squad => {
            res.send({ 'Squad Updated': squad });
          })
          .catch(error => {
            res.status(this.errorForbidden).send({ 'Unable To Update': error.message });
          });
      }
    });
  };

  // Delete Squad
  deleteSquad = (req, res) => {
    this.model.findByIdAndDelete({ _id: req.params.id }, err => {
      if (err) {
        res.send(err);
      }
      res.send('Squad Removed');
    });
  };
}
