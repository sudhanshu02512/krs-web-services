const express = require('express');
const router = express.Router();

/**Gemini Configuration */
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyCVRWb3Z3afD-i473m9Bv0J3CSuGiB3-fg");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/** Gemini Router */
router.get('/',async (req,res)=>{
    const prompt = req.body?.prompt;
    const result = prompt ? await model.generateContent(prompt) : {"error":"Please provide prompt in the body"};
    res.json(result);
});

module.exports = router;