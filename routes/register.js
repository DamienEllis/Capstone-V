let express = require('express');
let router = express.Router();

// get register controller
const RegisterUser = require('../controllers/registerUser.controller');

// assign to http method
router.post('/', RegisterUser.create)

module.exports = router;