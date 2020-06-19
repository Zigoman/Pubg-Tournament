import * as express from 'express';
import { UserCtrl } from './controllers/user';
import { SquadCtrl } from './controllers/squad';

export function setRoutes(app) {
  const router = express.Router();
  const userCtrl = new UserCtrl();
  const squadCtrl = new SquadCtrl();

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/getData').get(userCtrl.getAll);

  // Add User
  router.route('/add-user').post(userCtrl.addUser);
  // Get All Users
  router.route('/getUsers').get(userCtrl.getAllUsers);
  // Get Single User
  router.route('/get-by-id/:id').get(userCtrl.getSingleUser);
  // Update User
  router.route('/updateUser/:id').post(userCtrl.updateUser);
  // Delete User
  router.route('/u-delete/:id').get(userCtrl.deleteUser);

  // Squad
  // Add Squad
  router.route('/add-squad').post(squadCtrl.addSquad);
  // Get All Squads
  router.route('/getSquads').get(squadCtrl.getAllSquads);
  // Get Single Squad
  router.route('/get-squad/:id').get(squadCtrl.getSingleSquad);
  // Update Squad
  router.route('/updateSquad/:id').post(squadCtrl.updateSquad);
  // Delete Squad
  router.route('/s-delete/:id').get(squadCtrl.deleteSquad);

  // Apply the routes to our application with the prefix /api
  app.use('/api/data', router);
}
