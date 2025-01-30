// import express from 'express';
// import { login, register } from '../controllers/user.js';                              
// const router =express.Router();
 
// router.post('/user/register',register);
// router.post('/user/login', login); // Correct

// export default router; 


// import express from 'express';
// import { login, myProfile, register } from '../controllers/user.js';
// import { authMiddleware, isAuth } from '../middlewares/auth.js';                        

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.get("/user/me",isAuth,myProfile)


// router.get('/protected-route', authMiddleware, (req, res) => {
//     res.status(200).json({ message: "Access granted to protected route", user: req.user });
// });

// export default router;


import express from "express";
import { login, register, myProfile } from "../controllers/user.js";
import { authMiddleware, isAuth } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user/me", isAuth, myProfile);

router.get("/protected-route", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Access granted to protected route", user: req.user });
});

export default router;
