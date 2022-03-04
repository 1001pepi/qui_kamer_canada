module.exports = (sequelize, Sequelize) => {
    const Service_post = sequelize.define("service_post", {
        
        category:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        }
    }, {
        timestamps: true
    });
  
    return Service_post;
};