const express = require('express');
const router = express.Router();

//Read package.json

const {name,version} = require('../package.json');

router.get('/',(req,res)=>{
    let response ={
        status: 'success',
        service: name,
        version: version,
        uptime: `${process.uptime().toFixed(2)} seconds`,
        timestamp: new Date().toISOString(),
        message: 'Service is running smoothly 🚀',
        idol:'⭕‼️⭕',
        support:"In case of any issue please contact sudhanshu02512@gmail.com"
    }
    res.send(response);
})

module.exports = router;
