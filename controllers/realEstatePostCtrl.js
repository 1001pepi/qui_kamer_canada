const db = require("../models");
const RealEstatePost = db.real_estate_post;
const Op = db.Sequelize.Op;

//create and save a new realEstate_post
exports.createRealEstatePost = (req, res) => {
    
    const realEstate_post = {
        category: req.body.category,
        available: req.body.available,
        contactId: req.body.contactId,
        positionId: req.body.positionId,
        postId: req.body.postIds
    }

    RealEstatePost.create(realEstate_post).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the realEstate_post!"
        })
    })
}

//retrieve all realEstate_posts
exports.findAllRealEstatePosts = (req, res) => {
    
    RealEstatePost.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving realEstate_posts!"
        });
    });
}

//find a single realEstate_post with it's id
exports.findOneRealEstatePost = (req, res) => {
    const id = req.params.id;

    RealEstatePost.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find realEstate_post with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving realEstate_post with id=${id}`
        });
    })
}

//update a realEstate_post
exports.updateRealEstatePost = (req, res) => {
    const id = req.params.id;

    RealEstatePost.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "RealEstatePost updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the realEstate_post was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the realEstate_post with id=${id}`
        });
    })
}

//delete a realEstate_post
exports.deleteRealEstatePost = (req, res) => {
    const id = req.params.id;

    RealEstatePost.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "RealEstatePost deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the realEstate_post with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete realEstate_post with id=${id}`
            });
        }
    })
}
