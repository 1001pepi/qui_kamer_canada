module.exports = (sequelize, Sequelize) => {
    const Community_post = sequelize.define("community_post", {
        
    }, {
        timestamps: true
    });
  
    return Community_post;
};