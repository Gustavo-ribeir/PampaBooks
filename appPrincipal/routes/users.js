const express = require('express');
const router = express.Router();
const { getUsers } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

//router.get('/', isAuthenticated, isAdmin, getUsers);

module.exports = router;

