const express = require('express');
const router = express.Router();

//Get package.json details
const {version,name} = require('../package.json');

/** Api Home Configuration*/
router.get('/',(req,res)=>{
    const apiList = [
    { method: 'GET', path: '/api/gemini', description: 'Call Google Gemini AI API' },
    { method: 'GET', path: '/api/qr', description: 'Generate QR code' },
    { method: 'POST', path: '/api/qr', description: 'Generate QR code' },
    ];
    const response ={
        status: 'success',
        service: name,
        availableAPIs: apiList
    }
    res.send(response);
})

/**Gemini Api Routing Configuration */
const geminiRoute = require('../apis/geminiApi/gemini');
router.use('/gemini',geminiRoute);

/**qr Api Routing Configuration */
const qrRoute = require('../apis/qrApi/qr');
router.use('/qr',qrRoute);

module.exports = router;