module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        //ID of the user who made the post
        senderID: {
            type: Sequelize.STRING,
            allowNull: false,
            required: true,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        type: {
            type: Sequelize.DataTypes.ENUM("RESTORATION", "REALESTATE", "COMMUNITY", "EVENT", "MARKET", "SERVICE"),
            allowNull: true
        },
    }, {
        timestamps: true
    });
  
    return Post;
};