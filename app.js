/** Imports Synchronously App */
const express = require('express');

/** Initial Node App using express */
const app = express();

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
