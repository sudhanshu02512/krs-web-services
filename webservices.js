/** Imports Synchronously App */
const express = require('express');

/** Initial Node App using express */
const app = express();

/** CORS Middleware */
const cors = require('cors');
app.use(cors());

/** Middleware to parse JSON request bodies */
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/** DISABLED FOR NOW --- Middleware to parse url-encoded request bodies */ 
//app.use(bodyParser.urlencoded({ extended: true }));

//DOTENV Configuration
require('dotenv').config();

/**Port Setting */
const PORT = process.env.PORT || 8010;

/**Listen Node Application Server */
app.listen(PORT,()=>{
    console.log(`Server Started on ${PORT} port`)
})

/**Import Routes*/
const krishnaRoutes = require('./routes/krishna');

/**Route Setting */
app.use('/',krishnaRoutes);

/**Api Routes Configuration */
const apiRoutes = require('./routes/api');
app.use('/api',apiRoutes);