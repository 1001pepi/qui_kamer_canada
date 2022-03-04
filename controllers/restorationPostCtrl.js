const db = require("../models");
const RestorationPost = db.restoration_post;
const Op = db.Sequelize.Op;

//create and save a new restoration_post
exports.createRestorationPost = (req, res) => {
    
    const restoration_post = {
        category: req.body.category,
        contactId: req.body.contactId,
        positionId: req.body.positionId,
        postId: req.body.postId
    }

    RestorationPost.create(restoration_post).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the restoration_post!"
        })
    })
}

//retrieve all restoration_posts
exports.findAllRestorationPosts = (req, res) => {
    
    RestorationPost.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving restoration_posts!"
        });
    });
}

//find a single restoration_post with it's id
exports.findOneRestorationPost = (req, res) => {
    const id = req.params.id;

    RestorationPost.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find restoration_post with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving restoration_post with id=${id}`
        });
    })
}

//update a restoration_post
exports.updateRestorationPost = (req, res) => {
    const id = req.params.id;

    RestorationPost.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "RestorationPost updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the restoration_post was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the restoration_post with id=${id}`
        });
    })
}

//delete a restoration_post
exports.deleteRestorationPost = (req, res) => {
    const id = req.params.id;

    RestorationPost.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "RestorationPost deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the restoration_post with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete restoration_post with id=${id}`
            });
        }
    })
}
