const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/postCtrl");

router.post('/', postCtrl.createPost);
router.get('/', postCtrl.findAllPosts);
router.get('/:id', postCtrl.findOnePost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;