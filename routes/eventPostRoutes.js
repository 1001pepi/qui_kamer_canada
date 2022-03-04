const express = require("express");
const router = express.Router();
const eventPostCtrl = require("../controllers/eventPostCtrl");

router.post('/', eventPostCtrl.createEventPost);
router.get('/', eventPostCtrl.findAllEventPosts);
router.get('/:id', eventPostCtrl.findOneEventPost);
router.put('/:id', eventPostCtrl.updateEventPost);
router.delete('/:id', eventPostCtrl.deleteEventPost);

module.exports = router;