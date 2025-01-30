import express from 'express';
import { authMiddleware } from '../middlewares/auth.js'; 

const router = express.Router();


router.get('/protected-route', authMiddleware, (req, res) => {
    res.status(200).json({ message: "Access granted to protected route", user: req.user });
});

export default router;
