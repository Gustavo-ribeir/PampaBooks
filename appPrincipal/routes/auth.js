const express = require('express');
const router = express.Router();
const {check} = require('express-validator')
const { clientRegister, clientLogin } = require('../controllers/clientController');
const {registerUser, loginUser,getUsers} = require('../controllers/userController');

router.post('/register', [
    check('name').not().isEmpty().withMessage('O nome é obrigatório'),
    check('email').not().isEmpty().withMessage('O email é obrigatório'),
    check('password').isLength({min:8}).withMessage('A senha deve conter no mínimo 8 caracteres')
    ],clientRegister);
router.post('/login',[
    check('email').not().isEmpty().withMessage('O email é obrigatório'),
    check('password').not().isEmpty().withMessage('A senha é obrigatória')
    ],clientLogin);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/users', getUsers); 
module.exports = router;