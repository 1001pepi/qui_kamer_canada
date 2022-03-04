module.exports = (sequelize, Sequelize) => {
    const Position = sequelize.define("position", {
        place:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
        longitude:{
            type: Sequelize.INTEGER,
            allowNull: true,
            required: false
        },
        latitude:{
            type: Sequelize.INTEGER,
            allowNull: true,
            required: false
        }
    }, {
        timestamps: true
    });
  
    return Position;
};