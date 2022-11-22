let express = require('express');
let router = express.Router();

// get constroller
const VerifyUser = require('../controllers/userJWTVerify.controller')

router.get('/', VerifyUser.verify)

module.exports = router;