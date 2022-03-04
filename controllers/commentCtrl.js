const db = require("../models");
const Comment = db.comment;
const Op = db.Sequelize.Op;

//create and save a new comment
exports.createComment = (req, res) => {
    //request validation
    if(!req.body.senderID){
        res.status(400).send({
            message: "The senderID can not be empty!"
        });
        return;
    }else if(!req.body.content){
        res.status(400).send({
            message: "The content can not be empty!"
        });
        return;
    }else if(!req.body.postId){
        res.status(400).send({
            message: "The postID can not be empty!"
        });
        return;
    }

    const comment = {
        senderID: req.body.senderID,
        content: req.body.content,
        postId: req.body.postId
    }

    Comment.create(comment).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the comment!"
        })
    })
}

//retrieve all comments
exports.findAllComments = (req, res) => {
    
    Comment.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving comments!"
        });
    });
}

//find a single comment with it's id
exports.findOneComment = (req, res) => {
    const id = req.params.id;

    Comment.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find comment with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving comment with id=${id}`
        });
    })
}

//update a comment
exports.updateComment = (req, res) => {
    const id = req.params.id;

    Comment.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "Comment updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the comment was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the comment with id=${id}`
        });
    })
}

//delete a comment
exports.deleteComment = (req, res) => {
    const id = req.params.id;

    Comment.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "Comment deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the comment with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete comment with id=${id}`
            });
        }
    })
}
