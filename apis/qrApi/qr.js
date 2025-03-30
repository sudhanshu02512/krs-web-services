const express = require('express');
const router = express.Router();
const qr = require('qr-image');

/** QR Router */
router.get('/',async (req,res)=>{
    const text = req.body?.text;
    if(text){
        let qr_svg = qr.image(text, { type: 'svg' });
        qr_svg.pipe(require('fs').createWriteStream('qrImage.svg'));
        let svg_string = qr.imageSync('qrImage', { type: 'svg' });  
        res.send(svg_string);
    }
    else{
        res.json({"error":"Please provide text"});
    }

});

module.exports = router;
