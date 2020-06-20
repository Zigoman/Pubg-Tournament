import * as express from 'express';
import { UserCtrl } from './controllers/user';
import { SquadCtrl } from './controllers/squad';

export function setRoutes(app) {
  const router = express.Router();
  const userCtrl = new UserCtrl();
  // const squadCtrl = new SquadCtrl();
  const squadControl = new SquadCtrl();
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
  router.route('/add-squad').post(squadControl.addSquad);
  // Get All Squads
  router.route('/getSquads').get(squadControl.getAllSquads);
  // Get Single Squad
  router.route('/get-squad/:id').get(squadControl.getSingleSquad);
  // Update Squad Name
  router.route('/updateSquad/:id').post(squadControl.updateSquadName);
  // Add Squad Member
  router.route('/addMember/:id').post(squadControl.addSquadMember);
  // Delete Squad
  router.route('/s-delete/:id').get(squadControl.deleteSquad);

  // Apply the routes to our application with the prefix /api
  app.use('/api/data', router);
}
