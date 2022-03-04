module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
        //ID of the user who made the post
        senderID: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true,
        },
        content: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    }, {
        timestamps: true
    });
  
    return Comment;
};