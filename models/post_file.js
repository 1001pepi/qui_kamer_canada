module.exports = (sequelize, Sequelize) => {
    const Post_file = sequelize.define("post_file", {
        fileId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            required: true,
        },
    }, {
        timestamps: true
    });
  
    return Post_file;
};