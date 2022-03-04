const db = require("../models");
const CommunityPost = db.community_post;
const Op = db.Sequelize.Op;

//create and save a new community_post
exports.createCommunityPost = (req, res) => {
    
    const community_post = {
        positionId: req.body.positionId,
        postId: req.body.postId,
        contactId: req.body.contactId
    }

    CommunityPost.create(community_post).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the community_post!"
        })
    })
}

//retrieve all community_posts
exports.findAllCommunityPosts = (req, res) => {
    
    CommunityPost.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving community_posts!"
        });
    });
}

//find a single community_post with it's id
exports.findOneCommunityPost = (req, res) => {
    const id = req.params.id;

    CommunityPost.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find community_post with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving community_post with id=${id}`
        });
    })
}

//update a community_post
exports.updateCommunityPost = (req, res) => {
    const id = req.params.id;

    CommunityPost.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "CommunityPost updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the community_post was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the community_post with id=${id}`
        });
    })
}

//delete a community_post
exports.deleteCommunityPost = (req, res) => {
    const id = req.params.id;

    CommunityPost.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "CommunityPost deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the community_post with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete community_post with id=${id}`
            });
        }
    })
}
