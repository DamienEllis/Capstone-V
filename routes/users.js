let express = require('express');
let router = express.Router();

// get controllers
const ShowUsers = require('../controllers/showUsers.controller');
const RemoveUser = require('../controllers/removeUsers.controller');
const UpdateUser = require('../controllers/modifyUser.controller')

//assign to appropriate http methods
router.get('/', ShowUsers.display)
router.delete('/', RemoveUser.delete)
router.put('/', UpdateUser.update)


module.exports = router;