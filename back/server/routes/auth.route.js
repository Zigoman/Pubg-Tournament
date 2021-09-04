const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// REGISTER
router.post('/signup', authController.signup);
// LOGIN
router.post('/login', authController.login);
// Authenticate user
router.get('/', authController.authenticateUser);

module.exports = router;
