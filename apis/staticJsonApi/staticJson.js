const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const response = {
    "status": 200,
    "message": "OK",
    "response": {
        "book_uuid": "19aab921-25a5-4beb-a59e-ac72320061d6",
        "cash_flow_features": {
        "analysis_period": {
            "start_date": "2025-01-01",
            "end_date": "2025-06-30"
        },
        "cash_flow_items": [
            {
            "category": "Income",
            "total_amount": 27000.00,
            "average_monthly_amount": 4500.00,
            "transaction_count": 6
            },
            {
            "category": "Housing",
            "total_amount": -9000.00,
            "average_monthly_amount": -1500.00,
            "transaction_count": 6
            },
            {
            "category": "Debt Payments",
            "total_amount": -3000.00,
            "average_monthly_amount": -500.00,
            "transaction_count": 6
            }
        ]
        },
        "review_required": true,
        "review_reasons": [
        "Authenticity score below threshold", 
        "Anomaly in transactions detected"
        ],
        "authenticity_score": {
        "score": 45,
        "reason_codes": [
            {
            "code": "120-M",
            "confidence": "MEDIUM",
            "description": "Possible balance tampering"
            }
        ]
        }
    }
    }
    res.send(response);
});

module.exports = router;