import { Order } from "../models/Order.js";
import { User } from "../models/User.js";

export const createOrder = async (req, res) => {
  try {
    const { courseId, amount } = req.body;

    // Check if the user already purchased the course
    const existingOrder = await Order.findOne({ user: req.user._id, course: courseId, status: "Paid" });
    if (existingOrder) {
      return res.status(400).json({ message: "You have already purchased this course." });
    }

    // Create a new order
    const order = new Order({
      user: req.user._id,
      course: courseId,
      amount,
    });

    await order.save();
    res.status(201).json({ message: "Order created successfully.", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const confirmPayment = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the order
    const order = await Order.findById(id).populate("course");
    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }

    // Mark order as paid
    order.status = "Paid";

    // Add course to user subscription
    const user = await User.findById(req.user._id);
    user.subscription.push(order.course._id);
    await user.save();
    await order.save();

    res.json({ message: "Payment confirmed. Access granted.", order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("course");
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
