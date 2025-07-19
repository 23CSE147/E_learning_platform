// import express from 'express';
// import dotenv from 'dotenv';
// import { connectDb } from './database/db.js';

// dotenv.config();
// const app = express();
// app.use(express.json())
// const port = process.env.PORT;
// app.get("/", (req, res) => {
//     res.send("Server is working");
// })

// import userRoutes from './routes/user.js';

// app.use('/api',userRoutes);

// app.listen(port, () => {
//     console.log("Server is running on http://localhost:5000");
//     connectDb();    
// })

// import express from 'express';
// import dotenv from 'dotenv';
// import { connectDb } from './database/db.js';
// import userRoutes from './routes/user.js'; // Import user routes
// import protectedRoutes from './routes/protected.js';
// //import cors from "cors";
// import cors from 'cors';
// // Allow all origins

// dotenv.config();

// const app = express();
// app.use(express.json()); // Middleware to parse JSON requests
// app.use(cors()); 
// const port = process.env.PORT || 5000;

// // Test route
// app.get("/", (req, res) => {
//     res.send("Server is working");
// });

// // Use user routes
// app.use('/api', userRoutes); // All routes in user.js will be prefixed with /api
// app.use('/api', protectedRoutes);
// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
//     connectDb();    
// });



import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { connectDb } from './database/db.js';
import userRoutes from './routes/user.js';
import courseRoutes from './routes/course.js'
import adminRoutes from'./routes/admin.js';
import orderRoutes from "./routes/order.js";
import cors from 'cors';
import Razorpay from 'razorpay';


console.log("✅ Razorpay Key:", process.env.Razorpay_key);
console.log("✅ Razorpay Secret:", process.env.Razorpay_Secret);
export const instance=new Razorpay({
    key_id:process.env.Razorpay_key,
    key_secret:process.env.Razorpay_Secret,
})


const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads",express.static("uploads"))
app.use("/api", orderRoutes);


const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server is working");
});


app.use('/api', userRoutes);
app.use('/api',courseRoutes);
app.use('/api',adminRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
});









// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';  // Import CORS
// import { connectDb } from './database/db.js';

// dotenv.config();
// const app = express();

// // Enable CORS for requests from your frontend
// app.use(cors({
//     origin: 'http://localhost:5173',  // Allow only your frontend's origin
//     methods: 'GET,POST',             // Allow only GET and POST methods
//     credentials: true,               // Allow cookies/credentials (if needed)
// }));

// app.use(express.json());
// const port = process.env.PORT;

// app.get("/", (req, res) => {
//     res.send("Server is working");
// });

// import userRoutes from './routes/user.js';

// app.use('/api', userRoutes);

// app.listen(port, () => {
//     console.log("Server is running on http://localhost:5000");
//     connectDb();    
// });