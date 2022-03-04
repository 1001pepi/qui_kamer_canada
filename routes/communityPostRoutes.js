const express = require("express");
const router = express.Router();
const communityPostCtrl = require("../controllers/communityPostCtrl");

router.post('/', communityPostCtrl.createCommunityPost);
router.get('/', communityPostCtrl.findAllCommunityPosts);
router.get('/:id', communityPostCtrl.findOneCommunityPost);
router.put('/:id', communityPostCtrl.updateCommunityPost);
router.delete('/:id', communityPostCtrl.deleteCommunityPost);

module.exports = router;