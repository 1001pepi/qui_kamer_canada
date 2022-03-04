const express = require("express");
const router = express.Router();
const positionCtrl = require("../controllers/positionCtrl");

router.post('/', positionCtrl.createPosition);
router.get('/', positionCtrl.findAllPositions);
router.get('/:id', positionCtrl.findOnePosition);
router.put('/:id', positionCtrl.updatePosition);
router.delete('/:id', positionCtrl.deletePosition);

module.exports = router;