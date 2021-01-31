
let express = require('express');

let router = express.Router();

let userController = require('../controllers/userController');
const { checkToken } = require("../models/auth");
router.get('/users', userController.getUser);
router.get('/users/:iduser',userController.getUserById);
router.post('/users',userController.addUser);
router.put('/users/:iduser',userController.modifyUser);
router.delete('/users/:iduser',userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;