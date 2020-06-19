import { Squad } from '../models/squad';
import { BaseCtrl } from './base';

export class SquadCtrl extends BaseCtrl {
  model = Squad;
  // Add Squad
  addSquad = (req, res) => {
    const squadRequest = new this.model(req.body);

    squadRequest
      .save()
      .then(squad => {
        res.status(this.statusOk).json({ 'added squad': squad });
      })
      .catch(err => {
        res.status(this.badRequest).json(err);
      });
  };

  // Get All Squads
  getAllSquads = (req, res) => {
    this.model.find((err, squads) => {
      if (err) res.json(err);
      res.json(squads);
    });
  };

  // Get Squad By ID
  getSingleSquad = (req, res) => {
    Squad.findById({ _id: req.params.id }, (err, squad) => {
      if (err) {
        res.json(err);
      }
      res.json(squad);
    });
  };

  // Update Squad
  updateSquad = (req, res) => {
    const id = req.params.id;
    Squad.findById(id, (err, squadToUpdate) => {
      if (!squadToUpdate) {
        res.json(err);
      } else {
        squadToUpdate.name = req.body.name;
        squadToUpdate.password = req.body.password;
        squadToUpdate.members = req.body.members;
        squadToUpdate.roomNumber = req.body.roomNumber;
        squadToUpdate.protected = req.body.protected;
        squadToUpdate.updated = Date.now();
        squadToUpdate
          .save()
          .then(squad => {
            res.json({ 'Squad Updated': squad });
          })
          .catch(error => {
            res.status(this.errorForbidden).json({ 'Unable To Update': error });
          });
      }
    });
  };

  // Delete Squad
  deleteSquad = (req, res) => {
    Squad.findByIdAndDelete({ _id: req.params.id }, err => {
      if (err) res.json(err);
      res.json('Squad Removed');
    });
  };
}
