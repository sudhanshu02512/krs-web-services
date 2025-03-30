const express = require('express');
const router = express.Router();
const qr = require('qr-image');

/** QR GET Router */
router.get('/',async (req,res)=>{
    const text = req.body?.text;
    if(text){
        let svg_string = qr.imageSync(text, { type: 'svg' });  
        res.send(svg_string);
    }
    else{
        res.json({"error":"Please provide text"});
    }
});

/** QR POST Router */
router.post('/',async (req,res)=>{
    const text = req.body?.text;
    if(text){
        let svg_string = qr.imageSync(text, { type: 'svg' });  
        res.send(svg_string);
    }
    else{
        res.json({"error":"Please provide text"});
    }
});

module.exports = router;
