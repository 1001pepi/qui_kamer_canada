module.exports = (sequelize, Sequelize) => {
    const Real_estate_post = sequelize.define("real_estate_post", {
        
        category:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
        available:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
            required: true,
            defaultValue: '1'
        }
    }, {
        timestamps: true
    });
  
    return Real_estate_post;
};