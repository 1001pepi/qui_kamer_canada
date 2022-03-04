const express = require("express");
const router = express.Router();
const marketPostCtrl = require("../controllers/marketPostCtrl");

router.post('/', marketPostCtrl.createMarketPost);
router.get('/', marketPostCtrl.findAllMarketPosts);
router.get('/:id', marketPostCtrl.findOneMarketPost);
router.put('/:id', marketPostCtrl.updateMarketPost);
router.delete('/:id', marketPostCtrl.deleteMarketPost);

module.exports = router;