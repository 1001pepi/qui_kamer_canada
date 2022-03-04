const express = require("express");
const router = express.Router();
const realEstatePostCtrl = require("../controllers/realEstatePostCtrl");

router.post('/', realEstatePostCtrl.createRealEstatePost);
router.get('/', realEstatePostCtrl.findAllRealEstatePosts);
router.get('/:id', realEstatePostCtrl.findOneRealEstatePost);
router.put('/:id', realEstatePostCtrl.updateRealEstatePost);
router.delete('/:id', realEstatePostCtrl.deleteRealEstatePost);

module.exports = router;