module.exports = (sequelize, Sequelize) => {
    const Restoration_post = sequelize.define("restoration_post", {
       
        category:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        }
    }, {
        timestamps: true
    });
  
    return Restoration_post;
};