const express = require("express");
const router = express.Router();
const qr = require("qr-image");
require("dotenv").config();

/** QR GET Router */
router.get("/", async (req, res) => {
  if (process.env.QR_API_SWTICH == "TRUE") {
    const text = req.body?.text;
    if (text) {
      let svg_string = qr.imageSync(text, { type: "svg" });
      res.status(200).send(svg_string);
    } else {
      res.status(400).json({ error: "Please provide text" });
    }
  } else {
    const response = {
      status: 503,
      message: "QR Web Service Unavailable",
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

/** QR POST Router */
router.post("/", async (req, res) => {
  const text = req.body?.text;
  if (text) {
    let svg_string = qr.imageSync(text, { type: "svg" });
    res.send(svg_string);
  } else {
    res.json({ error: "Please provide text" });
  }
});

module.exports = router;
