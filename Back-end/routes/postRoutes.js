
let express = require('express');

let router = express.Router();

let postController = require('../controllers/postController');

router.get('/posts/themes/:idtheme', postController.getPostByTheme);
router.get('/posts/users/:iduser', postController.getPostByUser);
router.get('/posts/:idpost',postController.getPostById);
router.get('/posts',postController.getPost);
router.post('/posts',postController.addPost);
router.put('/posts/:idpost',postController.modifyPost);
router.delete('/posts/:idpost',postController.deletePost);

module.exports = router;
