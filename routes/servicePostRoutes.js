const express = require("express");
const router = express.Router();
const servicePostCtrl = require("../controllers/servicePostCtrl");

router.post('/', servicePostCtrl.createServicePost);
router.get('/', servicePostCtrl.findAllServicePosts);
router.get('/:id', servicePostCtrl.findOneServicePost);
router.put('/:id', servicePostCtrl.updateServicePost);
router.delete('/:id', servicePostCtrl.deleteServicePost);

module.exports = router;