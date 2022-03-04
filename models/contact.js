module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
        phoneNumber1:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
        phoneNumber2:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
        facebook:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
        instagram:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
        twitter:{
            type: Sequelize.STRING,
            allowNull: true,
            required: false
        },
    }, {
        timestamps: true
    });
  
    return Contact;
};