import express from "express";
import { createOrder, confirmPayment, getMyOrders } from "../controllers/order.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/order", isAuth, createOrder); // Create an order
router.post("/order/confirm/:id", isAuth, confirmPayment); // Confirm payment
router.get("/orders", isAuth, getMyOrders); // Get user orders

export default router;
