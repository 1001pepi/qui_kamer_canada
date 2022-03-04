const db = require("../models");
const PostFile = db.post_file;
const Op = db.Sequelize.Op;

//create and save a new postFile
exports.createPostFile = (req, res) => {
    //request validation
    if(!req.body.fileId){
        res.status(400).send({
            message: "The fileId can not be empty!"
        });
        return;
    }

    const postFile = {
        fileId: req.body.fileId,
        postId: req.body.postId
    }

    PostFile.create(postFile).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the postFile!"
        })
    })
}

//retrieve all postFiles
exports.findAllPostFiles = (req, res) => {
    
    PostFile.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving postFiles!"
        });
    });
}

//find a single postFile with it's id
exports.findOnePostFile = (req, res) => {
    const id = req.params.id;

    PostFile.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find postFile with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving postFile with id=${id}`
        });
    })
}

//update a postFile
exports.updatePostFile = (req, res) => {
    const id = req.params.id;

    PostFile.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "PostFile updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the postFile was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the postFile with id=${id}`
        });
    })
}

//delete a postFile
exports.deletePostFile = (req, res) => {
    const id = req.params.id;

    PostFile.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "PostFile deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the postFile with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete postFile with id=${id}`
            });
        }
    })
}
