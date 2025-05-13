const express = require('express');
const { userRegister, userLogin, userLogout } = require('../controllers/user.controller');
const {verifyJwt} = require('../middlewares/auth.middleware.js')
const router = express.Router()

router.route('/register').post(userRegister);

router.route('/login').post(userLogin);

router.route('/logout').post(verifyJwt, userLogout);

module.exports = router