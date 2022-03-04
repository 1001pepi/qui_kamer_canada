const express = require("express");
const router = express.Router();
const contactCtrl = require("../controllers/contactCtrl");

router.post('/', contactCtrl.createContact);
router.get('/', contactCtrl.findAllContacts);
router.get('/:id', contactCtrl.findOneContact);
router.put('/:id', contactCtrl.updateContact);
router.delete('/:id', contactCtrl.deleteContact);

module.exports = router;