import express from "express";
import { processPayment } from "../controllers/payment.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

// POST endpoint to process payment
router.post("/payment", isAuth, processPayment);

export default router;










// // routes/payment.js
// import express from "express";
// import { makePayment } from "../controllers/payment.js";
// import { isAuth } from "../middlewares/auth.js";
// const router = express.Router();

// // POST route for processing payment
// router.post("/payment", isAuth,makePayment);

// export default router;






// routes/payment.js
// import express from "express";
// import { checkout, paymentVerification } from "../controllers/course.js";
// import { isAuth } from "../middlewares/auth.js";

// const router = express.Router();

// // Route for creating a mock order
// router.post("/checkout/:id", isAuth, checkout);

// // Route for verifying the payment
// router.post("/verify-payment/:id", isAuth, paymentVerification);

// export default router;


// import express from "express";
// import Payment from "../models/Payment.js"; // Correct import for default export
//  // ✅ Correct
//  // Ensure this model exists

// const router = express.Router();

// // Get payment details by ID
// router.get("/payment-details/:id", async (req, res) => {
//     try {
//         const paymentId = req.params.id;
//         const payment = await Payment.findOne({ payment_id: paymentId });

//         if (!payment) {
//             return res.status(404).json({ message: "Payment details not found" });
//         }

//         res.json(payment);
//     } catch (error) {
//         res.status(500).json({ message: "Server error", error: error.message });
//     }
// });

// export default router;
