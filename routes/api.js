const express = require('express');
const router = express.Router();

/** Api Home Configuration*/
router.get('/',(req,res)=>{
    res.send('Api Home');
})

/**Gemini Api Routing Configuration */
const geminiRoute = require('../apis/geminiApi/gemini');
router.use('/gemini',geminiRoute);

module.exports = router;