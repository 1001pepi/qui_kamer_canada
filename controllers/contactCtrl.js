const db = require("../models");
const Contact = db.contact;
const Op = db.Sequelize.Op;

//create and save a new contact
exports.createContact = (req, res) => {

    const contact = {
        phoneNumber1: req.body.phoneNumber1,
        phoneNumber2: req.body.phoneNumber2,
        email: req.body.email,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        twitter: req.body.twitter
    }

    Contact.create(contact).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the contact!"
        })
    })
}

//retrieve all contacts
exports.findAllContacts = (req, res) => {
    
    Contact.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving contacts!"
        });
    });
}

//find a single contact with it's id
exports.findOneContact = (req, res) => {
    const id = req.params.id;

    Contact.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find contact with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving contact with id=${id}`
        });
    })
}

//update a contact
exports.updateContact = (req, res) => {
    const id = req.params.id;

    Contact.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "Contact updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the contact was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the contact with id=${id}`
        });
    })
}

//delete a contact
exports.deleteContact = (req, res) => {
    const id = req.params.id;

    Contact.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "Contact deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the contact with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete contact with id=${id}`
            });
        }
    })
}
