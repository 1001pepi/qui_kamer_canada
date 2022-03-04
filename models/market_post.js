module.exports = (sequelize, Sequelize) => {
    const Market_post = sequelize.define("market_post", {
       
        products:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
    }, {
        timestamps: true
    });
  
    return Market_post;
};