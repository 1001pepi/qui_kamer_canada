const dbConfig = require("../config/database.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.comment = require("./comment")(sequelize, Sequelize);
db.community_post = require("./community_post")(sequelize, Sequelize);
db.contact = require("./contact")(sequelize, Sequelize);
db.event_post = require("./event_post")(sequelize, Sequelize);
db.market_post = require("./market_post")(sequelize, Sequelize);
db.position = require("./position")(sequelize, Sequelize);
db.post_file = require("./post_file")(sequelize, Sequelize);
db.post = require("./post")(sequelize, Sequelize);
db.real_estate_post = require("./real_estate_post")(sequelize, Sequelize);
db.restoration_post = require("./restoration_post")(sequelize, Sequelize);
db.service_post = require("./service_post")(sequelize, Sequelize);

//associations entre les modèles

//between a comment and the associated post
db.post.hasMany(db.comment, {as: "comments"});
db.comment.belongsTo(db.post, { as:"post" });

//between a community_post and its position
db.position.hasOne(db.community_post);
//between a community_post and the associated post
db.post.hasOne(db.community_post);
//between a community_post and the associated contact
db.contact.hasOne(db.community_post);

//between an event_post and its position
db.position.hasOne(db.event_post);
//between an event_post and the associated post
db.post.hasOne(db.event_post);

//between a market_post and its position
db.position.hasOne(db.market_post);
//between a market_post and the associated post
db.post.hasOne(db.market_post);
//between a market_post and the associated contact
db.contact.hasOne(db.market_post);

//between a post_file and the associated post
db.post.hasMany(db.post_file, {as:"files"});
db.post_file.belongsTo(db.post, {as: "post"});

//between a real_estate_post and its position
db.position.hasOne(db.real_estate_post);
//between a real_estate_post and the associated post
db.post.hasOne(db.real_estate_post);
//between a real_estate_post and the associated contact
db.contact.hasOne(db.real_estate_post);

//between a restoration_post and its position
db.position.hasOne(db.restoration_post);
//between a restoration_post and the associated post
db.post.hasOne(db.restoration_post);
//between a restoration_post and the associated contact
db.contact.hasOne(db.restoration_post);

//between a service_post and its position
db.position.hasOne(db.service_post);
//between a service_post and the associated post
db.post.hasOne(db.service_post);
//between a service_post and the associated contact
db.contact.hasOne(db.service_post);


module.exports = db;