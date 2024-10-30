const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');


router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/users', isAuthenticated, isAdmin, getUsers);

module.exports = router;
