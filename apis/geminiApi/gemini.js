const express = require('express');
const router = express.Router();
require('dotenv').config();

/**Gemini Configuration */
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/** Gemini Router */
router.get('/',async (req,res)=>{
    const prompt = req.body?.prompt;
    const result = prompt ? await model.generateContent(prompt) : {"error":"Please provide prompt in the body"};
    res.json(result);
});

module.exports = router;