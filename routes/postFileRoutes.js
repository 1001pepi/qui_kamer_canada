const express = require("express");
const router = express.Router();
const PostFileCtrl = require("../controllers/postFileCtrl");

router.post('/', PostFileCtrl.createPostFile);
router.get('/', PostFileCtrl.findAllPostFiles);
router.get('/:id', PostFileCtrl.findOnePostFile);
router.put('/:id', PostFileCtrl.updatePostFile);
router.delete('/:id', PostFileCtrl.deletePostFile);

module.exports = router;