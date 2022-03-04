const express = require("express");
const router = express.Router();
const restorationPostCtrl = require("../controllers/restorationPostCtrl");

router.post('/', restorationPostCtrl.createRestorationPost);
router.get('/', restorationPostCtrl.findAllRestorationPosts);
router.get('/:id', restorationPostCtrl.findOneRestorationPost);
router.put('/:id', restorationPostCtrl.updateRestorationPost);
router.delete('/:id', restorationPostCtrl.deleteRestorationPost);

module.exports = router;