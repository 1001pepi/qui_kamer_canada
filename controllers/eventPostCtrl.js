const db = require("../models");
const EventPost = db.event_post;
const Op = db.Sequelize.Op;

//create and save a new event_post
exports.createEventPost = (req, res) => {
    
    const event_post = {
        startDate: new Date(req.body.startDate),
        endDate: req.body.endDate,
        startHour: req.body.startHour,
        endHour: req.body.endHour,
        positionId: req.body.positionId,
        postId: req.body.postId
    }

    EventPost.create(event_post).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the event_post!"
        })
    })
}

//retrieve all event_posts
exports.findAllEventPosts = (req, res) => {
    
    EventPost.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving event_posts!"
        });
    });
}

//find a single event_post with it's id
exports.findOneEventPost = (req, res) => {
    const id = req.params.id;

    EventPost.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find event_post with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving event_post with id=${id}`
        });
    })
}

//update a event_post
exports.updateEventPost = (req, res) => {
    const id = req.params.id;

    EventPost.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "EventPost updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the event_post was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the event_post with id=${id}`
        });
    })
}

//delete a event_post
exports.deleteEventPost = (req, res) => {
    const id = req.params.id;

    EventPost.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "EventPost deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the event_post with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete event_post with id=${id}`
            });
        }
    })
}
