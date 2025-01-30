// //import { response } from "express";
// import { User } from "../models/User.js";
// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken"

// export const register = async(req,res)=>{
//     try{
//     const {email,name,password}=req.body
//     let user= await User.findOne({email});
//      if(user){
//         return response.status(400).json({
//             message:"User already Exists",
//         });
//     }
//       const hashPassword =await bcrypt.hash(password,10)
          
//         user={
//             name,
//             email,
//             password:hashPassword
            
//         }
     
//       const otp=Math.floor(Math.random()*1000000);
//       const activationToken= jwt.sign({
//         user,
//         otp,
//       },process.env.Activation_Secret,{
//         expiresIn:"5m"
//       });
//       const data={
//         name,
//         otp,
//       };
//     }catch(error){
//         res.status(500).json({
//             message:error.message,
//         })

//     }
// }




// import { User } from "../models/User.js";
// import bcrypt from 'bcrypt';
// import jwt from "jsonwebtoken";

// export const register = async (req, res) => {
//   try {
//     const { email, name, password } = req.body;

//     // Check if the user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({
//         message: "User already exists",
//       });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     user = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // Save the new user to the database
//     await user.save();

//     // Generate a JWT token for authentication
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET_KEY, // Use an environment variable for secret key
//       { expiresIn: "1h" }
//     );

//     // Send the token in the response
//     res.status(201).json({
//       message: "User registered successfully",
//       token, // Send the token after registration
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };





// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { User } from '../models/User.js';


// export const register = async (req, res) => {
//   try {
//     const { email, name, password } = req.body;

//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashPassword = await bcrypt.hash(password, 10);

//     user = new User({
//       name,
//       email,
//       password: hashPassword,
//     });

//     await user.save();

//     const token = jwt.sign(
//       { id: user._id, email: user.email }, // Include `id` here
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: "1h" }
//     );
    

//     res.status(201).json({ message: "User registered successfully", token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Email is wrong" });
//     }

//     const isValidPassword = await bcrypt.compare(password, user.password);
//     if (!isValidPassword) {
//       return res.status(400).json({ message: "Wrong Password" });
//     }

//     const token = jwt.sign(
//       { id: user._id, email: user.email }, // Include `id` here
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: "1h" }
//     );
    

//     res.status(200).json({ message: `Welcome Back ${user.name}` ,token,user,});
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// export const myProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id); // Access `req.user.id` set by middleware
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ user });
//   } catch (error) {
//     console.error("MyProfile Error:", error);
//     res.status(500).json({ message: error.message });
//   }
// };





// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import { User } from '../models/User.js';
// import TryCatch from '../middlewares/TryCatch.js';

// export const register = async (req, res) => {
//   try {
//     const { email, name, password } = req.body;

//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashPassword = await bcrypt.hash(password, 10);

//     user = new User({
//       name,
//       email,
//       password: hashPassword,
//     });

//     await user.save();

//     // Include `id` in the payload
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: "1h" }
//     );

//     res.status(201).json({ message: "User registered successfully", token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     const isValidPassword = await bcrypt.compare(password, user.password);
//     if (!isValidPassword) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // Include `id` in the payload
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET_KEY,
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ message: `Welcome back, ${user.name}`, token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const myProfile = async (req, res) => {
//   try {
//     const user = req.myprofileuser; // User is attached by isAuth middleware
//     res.status(200).json({ user });
//   } catch (error) {
//     console.error("MyProfile Error:", error.message);
//     res.status(500).json({ message: error.message });
//   }
// };





import bcrypt from 'bcrypt';
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
