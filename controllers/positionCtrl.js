const db = require("../models");
const Position = db.position;
const Op = db.Sequelize.Op;

//create and save a new position
exports.createPosition = (req, res) => {

    const position = {
        place: req.body.place,
        longitude: req.body.longitude,
        latitude: req.body.latitude
    }

    Position.create(position).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the position!"
        })
    })
}

//retrieve all positions
exports.findAllPositions = (req, res) => {
    
    Position.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving positions!"
        });
    });
}

//find a single position with it's id
exports.findOnePosition = (req, res) => {
    const id = req.params.id;

    Position.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find position with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving position with id=${id}`
        });
    })
}

//update a position
exports.updatePosition = (req, res) => {
    const id = req.params.id;

    Position.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "Position updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the position was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the position with id=${id}`
        });
    })
}

//delete a position
exports.deletePosition = (req, res) => {
    const id = req.params.id;

    Position.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "Position deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the position with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete position with id=${id}`
            });
        }
    })
}
