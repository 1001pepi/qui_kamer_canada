module.exports = (sequelize, Sequelize) => {
    const Event_post = sequelize.define("event_post", {

        startDate:{
            type: Sequelize.DATEONLY,
            allowNull: true,
            required: false
        },
        endDate:{
            type: Sequelize.DATEONLY,
            allowNull: true,
            required: false
        },
        startHour:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
        endHour:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        }
    }, {
        timestamps: true
    });
  
    return Event_post;
};