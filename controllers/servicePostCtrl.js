const db = require("../models");
const ServicePost = db.service_post;
const Op = db.Sequelize.Op;

//create and save a new service_post
exports.createServicePost = (req, res) => {
    
    const service_post = {
        category: req.body.category,
        contactId: req.body.contactId,
        positionId: req.body.positionId,
        postId: req.body.postId
    }

    ServicePost.create(service_post).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the service_post!"
        })
    })
}

//retrieve all service_posts
exports.findAllServicePosts = (req, res) => {
    
    ServicePost.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving service_posts!"
        });
    });
}

//find a single service_post with it's id
exports.findOneServicePost = (req, res) => {
    const id = req.params.id;

    ServicePost.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find service_post with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving service_post with id=${id}`
        });
    })
}

//update a service_post
exports.updateServicePost = (req, res) => {
    const id = req.params.id;

    ServicePost.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "ServicePost updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the service_post was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the service_post with id=${id}`
        });
    })
}

//delete a service_post
exports.deleteServicePost = (req, res) => {
    const id = req.params.id;

    ServicePost.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "ServicePost deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the service_post with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete service_post with id=${id}`
            });
        }
    })
}
