const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/commentCtrl");

router.post('/', commentCtrl.createComment);
router.get('/', commentCtrl.findAllComments);
router.get('/:id', commentCtrl.findOneComment);
router.put('/:id', commentCtrl.updateComment);
router.delete('/:id', commentCtrl.deleteComment);

module.exports = router;