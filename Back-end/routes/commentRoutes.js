
let commentController = require('../controllers/commentController');

let express = require('express');

let router = express.Router();

router.get('/comments/posts/:idpost', commentController.getCommentByPost);
router.get('/comments/users/:iduser', commentController.getCommentByUser);
router.get('/comments', commentController.getComment);
router.post('/comments',commentController.addCmment);
router.put('/comments/:idcomment',commentController.modifyComment);
router.delete('/comments/:idcomment',commentController.deleteComment);
router.get('/comments/:idcomment',commentController.getcommentById);
module.exports = router;
