const db = require("../models");
const Post = db.post;
const Comment = db.comment;
const Op = db.Sequelize.Op;

//create and save a new post
exports.createPost = (req, res) => {
    //request validation
    if(!req.body.senderID){
        res.status(400).send({
            message: "The senderID can not be empty!"
        });
        return;
    }

    const post = {
        senderID: req.body.senderID,
        description: req.body.description,
        type: req.body.type
    }

    Post.create(post).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the post!"
        })
    })
}

//retrieve all posts
exports.findAllPosts = (req, res) => {
    
    Post.findAll({include: "comments"}).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving posts!"
        });
    });
}

//find a single post with it's id
exports.findOnePost = (req, res) => {
    const id = req.params.id;

    Post.findOne({where: {id: id}, include: "comments"}).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find post with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || `Error retreiving post with id=${id}`
        });
    })
}

//update a post
exports.updatePost = (req, res) => {
    const id = req.params.id;

    Post.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "Post updated!"
            });
        }else{
            res.send({
                message: `Cannot update post with id=${id}. Maybe the post was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the post with id=${id}`
        });
    })
}

//delete a post
exports.deletePost = (req, res) => {
    const id = req.params.id;

    Post.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "Post deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the post with id=${id}. Maybe the post was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete post with id=${id}`
            });
        }
    })
}

//get all the comments of a given post

