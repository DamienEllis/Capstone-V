let express = require('express');
let router = express.Router();

// get controllers
const ShowPasswords = require('../controllers/credentialShow.controller');
const CreatePassword = require('../controllers/createCredential.controller');
const UpdatePassword = require('../controllers/updateCredential.controller');
const DeletePassword = require('../controllers/deleteCredential.controller');

// assign controllers to http methods
router.get('/:data', ShowPasswords.display)
router.post('/', CreatePassword.create)
router.put('/', UpdatePassword.update)
router.delete('/', DeletePassword.delete)

module.exports = router;