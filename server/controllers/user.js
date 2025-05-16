import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import TryCatch from '../middlewares/TryCatch.js';


export const register = TryCatch(async (req, res) => {
  const { email, name, password } = req.body;

  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  user = new User({
    name,
    email,
    password: hashPassword,
  });

  await user.save();

  
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.status(201).json({ message: "User registered successfully", token });
});


export const login = TryCatch(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(400).json({ message: "Invalid email or password" });
  }


  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.status(200).json({ message: `Welcome back, ${user.name}`, token, user });
});


export const myProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user.id);  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  res.status(200).json(user);  
});
