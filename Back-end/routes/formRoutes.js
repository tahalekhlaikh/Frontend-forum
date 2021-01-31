let formController = require('../controllers/forumController');

let express = require('express');

let router = express.Router();

router.get('/forums', formController.getForum);
router.get('/forums/:idforum', formController.getForumById);
router.post('/forums',formController.addForum);
router.put('/forums/:idforum',formController.modifyForum);
router.delete('/forums/:idforum',formController.deleteForum);

module.exports = router;