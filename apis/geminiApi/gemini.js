const express = require("express");
const router = express.Router();
require("dotenv").config();

/**Gemini Configuration */
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

/** Gemini Router */
router.get("/", async (req, res) => {
  if (process.env.GEMINI_API_SWTICH == "TRUE") {
    const prompt = req.body?.prompt;
    if(prompt){
        const result = await model.generateContent(prompt);
        res.status(200).json(result);
    }
    else{
        const response = { error: "Please provide prompt in the body" };
        res.status(400).json(response);
    }
  } else {
    const response = {
      status: 503,
      message: "Gemini Web Service Unavailable",
      error: {
        code: "SERVER_DOWN",
        description:
          "The server is currently down for maintenance or experiencing issues.",
        retry_after_seconds: 120,
      },
      timestamp: new Date().toISOString(),
    };
    res.status(503).json(response);
  }
});

module.exports = router;
