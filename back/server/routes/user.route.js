const express = require('express');
const userCtrl = require('../controllers/user.controller');
const router = express.Router();

router.route('/').get(userCtrl.getAll).post();

router.route('/user/:id').get().post().patch().delete();

module.exports = router;
