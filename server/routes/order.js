import express from "express";
import { createOrder, confirmPayment, getMyOrders } from "../controllers/order.js";
import { isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/order", isAuth, createOrder); 
router.post("/order/confirm/:id", isAuth, confirmPayment); 
router.get("/orders", isAuth, getMyOrders);

export default router;
