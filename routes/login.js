let express = require('express');
let router = express.Router();

// Use the controller file to action
const userLogin = require('../controllers/userSignin.controller')

router.post('/', userLogin.login)

module.exports = router;