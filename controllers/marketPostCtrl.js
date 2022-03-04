const db = require("../models");
const MarketPost = db.market_post;
const Op = db.Sequelize.Op;

//create and save a new market_post
exports.createMarketPost = (req, res) => {
    
    const market_post = {
        products: req.body.products,
        positionId: req.body.positionId,
        contactId: req.body.contactId,
        postId: req.body.postId
    }

    MarketPost.create(market_post).then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the market_post!"
        })
    })
}

//retrieve all market_posts
exports.findAllMarketPosts = (req, res) => {
    
    MarketPost.findAll().then((data) => {
        res.send(data);

    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while retreiving market_posts!"
        });
    });
}

//find a single market_post with it's id
exports.findOneMarketPost = (req, res) => {
    const id = req.params.id;

    MarketPost.findByPk(id).then((data) => {
        if(data){
            res.send(data);

        }else{
            res.status(404).send({
                message: `Can not find market_post with id=${id}`
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error retreiving market_post with id=${id}`
        });
    })
}

//update a market_post
exports.updateMarketPost = (req, res) => {
    const id = req.params.id;

    MarketPost.update(req.body, {where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "MarketPost updated!"
            });
        }else{
            res.send({
                message: `Cannot update commment with id=${id}. Maybe the market_post was not found or req.body is empty!`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: `Error updating the market_post with id=${id}`
        });
    })
}

//delete a market_post
exports.deleteMarketPost = (req, res) => {
    const id = req.params.id;

    MarketPost.destroy({where: {id: id}}).then(num => {
        if(num == 1){
            res.send({
                message: "MarketPost deleted!"
            });
        }else{
            res.send({
                message: `Cannot delete the market_post with id=${id}. Maybe the commment was not found!`
            });
        }
    }).catch((err) => {
        if(err){
            res.status(500).send({
                message: `Could not delete market_post with id=${id}`
            });
        }
    })
}
