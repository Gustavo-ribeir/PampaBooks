const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');


//router.get('/', isAuthenticated, isAdmin, (req, res) => {
//  res.render('admin', { user: req.user });  
//});

module.exports = router;
