const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/", (req, res) => {
  if (process.env.STATIC_JSON_API_SWITCH == "TRUE") {
    const response = {
      status: 200,
      message: "OK",
      response: {
        book_uuid: "19aab921-25a5-4beb-a59e-ac72320061d6",
        cash_flow_features: {
          analysis_period: {
            start_date: "2025-01-01",
            end_date: "2025-06-30",
          },
          cash_flow_items: [
            {
              category: "Income",
              total_amount: 27000.0,
              average_monthly_amount: 4500.0,
              transaction_count: 6,
            },
            {
              category: "Housing",
              total_amount: -9000.0,
              average_monthly_amount: -1500.0,
              transaction_count: 6,
            },
            {
              category: "Debt Payments",
              total_amount: -3000.0,
              average_monthly_amount: -500.0,
              transaction_count: 6,
            },
          ],
        },
        review_required: true,
        review_reasons: [
          "Authenticity score below threshold",
          "Anomaly in transactions detected",
        ],
        authenticity_score: {
          score: 45,
          reason_codes: [
            {
              code: "120-M",
              confidence: "MEDIUM",
              description: "Possible balance tampering",
            },
          ],
        },
      },
    };
    res.status(200).send(response);
  }
  else{
    const response = {
      status: 503,
      message: "Static JSON Web Service Unavailable",
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
