const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

//routers
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const positionRoutes = require("./routes/positionRoutes");
const contactRoutes = require("./routes/contactRoutes");
const communityPostRoutes = require("./routes/communityPostRoutes");
const eventPostRoutes = require("./routes/eventPostRoutes");
const marketPostRoutes = require("./routes/marketPostRoutes");
const postFileRoutes = require("./routes/postFileRoutes");
const realEstatePostRoutes = require("./routes/realEstatePostRoutes");
const restorationPostRoutes = require("./routes/restorationPostRoutes");
const servicePostRoutes = require("./routes/servicePostRoutes");

//handle cors
app.use((req, res, next) => {
    const origin = req.headers.origin
  
    res.setHeader('Access-Control-Allow-Origin', origin ||'*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);
app.use('/position', positionRoutes);
app.use('/contact', contactRoutes);
app.use('/community_post', communityPostRoutes);
app.use('/event_post', eventPostRoutes);
app.use('/market_post', marketPostRoutes);
app.use('/post_file', postFileRoutes);
app.use('/real_estate_post', realEstatePostRoutes);
app.use('/restoration_post', restorationPostRoutes);
app.use('/service_post', servicePostRoutes);

app.listen(4000, () => {
  console.log("Up and running! -- This is our posts service");
})