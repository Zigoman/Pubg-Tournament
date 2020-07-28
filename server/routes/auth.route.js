const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// REGISTER
router.post('/signup', authController.signup);
// LOGIN
router.post('/login', authController.login);

// CHECK_TOKEN
router.post('/check_token', authController.check_token);

module.exports = router;
