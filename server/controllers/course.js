import TryCatch from "../middlewares/TryCatch.js";
import { Courses } from "../models/Course.js";
import { Lecture } from "../models/Lecture.js";
import { User } from "../models/User.js";
//import {instance} from "../index.js"
import crypto from 'crypto';
import { Payment } from "../models/Payment.js";
import { instance } from "../index.js";


// export const getAllCourses = TryCatch(async (req, res) => {
//   const courses = await Courses.find();
//   console.log("Fetched Courses from DB:", courses); // Check if courses are being fetched
//   if (!courses || courses.length === 0) {
//     return res.status(404).json({ message: "No courses found in the database" });
//   }
//   res.json({ courses });
// });

export const getAllCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find();
  console.log("Fetched Courses from DB:", courses);
  if (!courses || courses.length === 0) {
    
    return res.status(404).json({ message: "No courses found in the database" });
  }
  res.json({ courses });
});


export const getSingleCourse = TryCatch(async (req, res) => {
  const course = await Courses.findById(req.params.id)
  res.json({
    course,
  })
})

export const fetchLectures = TryCatch(async (req, res) => {
  const lectures = await Lecture.find({ course: req.params.id })

  const user = await User.findById(req.user._id);

  if (user.role === "admin") {
    return res.json({ lectures });
  }
  if (!user.subscription.includes(req.params.id))
    return res.status(400).json({
      message: "You have not subcribed to this course",
    })

  res.json({ lectures });
})

export const fetchLecture = TryCatch(async (req, res) => {
  const lecture = await Lecture.findById(req.params.id);
  if (!lecture) {
    return res.status(404).json({ message: "Lecture not found" });
  }

  const user = await User.findById(req.user._id);

  if (user.role === "admin") {
    return res.json({ lecture });
  }
  if (!user.subscription.includes(lecture.course)) {
    return res.status(400).json({
      message: "You have not subscribed to this course",
    });
  }

  res.json({ lecture });
});

//previous correct code
// export const fetchLecture = TryCatch(async (req, res) => {
//   const lecture = await Lecture.findById(req.params.id)
//   const user = await User.findById(req.user._id);

//   if (user.role === "admin") {
//     return res.json({ lecture });
//   }
//   if (!user.subscription.includes(lecture.course))
//     return res.status(400).json({
//       message: "You have not subcribed to this course",
//     })

//   res.json({ lecture });
// });



export const getMyCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find({ _id: req.user.subscription })

  res.json({
    courses,
  })
})




// export const fetchLectures1 = async (req, res) => {
//     try {
//       const lectures = await Lecture.find({ course: req.params.id });
//       const user = await User.findById(req.user._id);

//       // Verify if the user has paid for the course
//       const paidOrder = await Order.findOne({ user: req.user._id, course: req.params.id, status: "Paid" });
//       if (!paidOrder && user.role !== "admin") {
//         return res.status(403).json({ message: "Access denied. Payment required." });
//       }

//       res.json({ lectures });
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };


// export const checkout=TryCatch(async(req,res)=>{
//     const user =await User.findById(req,user._id)
//     const course =await Courses.findById(req.params.id)

//     if(user.subscription.includes(course._id)){
//         return res.status(400).json({
//             message:"You already have this course",
//         })
//     }
//     const options ={
//         amount : Number(course.price*100),
//         currency:"INR",
//     };
//     const order = await instance.orders.create(options);

//     res.status(201).json({
//         order,
//         course,
//     })
// })

// export const paymentVerification = TryCatch(async(req,res)=>{
//     const {order_id,payment_id,signature,}=req.body

//     const body = order_id+"|"+payment_id;

//     const expectedSignature = crypto.createHmac("sha256",process.env.secrectcode).update(body).digest("hex");
//     const isAuthentic = expectedSignature === signature
//     if(isAuthentic){
//         await Payment.create({
//             order_id,
//             payment_id,
//             signature,
//         })
//         const user = await User.findById(req.user._id)
//         const course = await Courses.findById(req.params.id)
//         user.subscription.push(course._id)
//         await user.save()
//         res.status(200).json({
//             message:"Course Purchased Successfully"
//         })
//     }else{
//        return res.status(400).json({
//             message:"payment  Failed"
//         })
//     }
// })




export const checkout = TryCatch(async (req, res) => {
  const user = await User.findById(req.user._id);
  const course = await Courses.findById(req.params.id);

  // Check if the user has already subscribed to the course
  if (user.subscription.includes(course._id)) {
    return res.status(400).json({
      message: "You already have this course",
    });
  }
  const options = {
    amount: Number(course.price * 100),
    currency: "INR",
  }

  const order = await instance.orders.create(options);
  res.status(201).json({
    order,
    course,
  })
});

export const paymentVerification = TryCatch(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
console.log("❤️❤️❤️❤️❤️❤️❤️❤️❤️😂😂😂",req.body);
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto.createHmac("sha256", process.env.Razorpay_secret).update(body).digest("hex");
  const isAuthentic = expectedSignature === razorpay_signature;

  if(isAuthentic){
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      const user =await User.findById(req.user._id)

      const course =await Courses.findById(req.params.id)

      user.subscription.push(course._id)
      await user.save()
      res.status(200).json({
        message:"Course Purchased Successfully"
      })

  }else{
    return res.status(400).json({
      message:"Payment Failed"
    })
  }
})








// // Simulate order creation (mock)
// const mockOrderId = crypto.randomBytes(16).toString("hex"); // Mock order ID

// res.status(201).json({
//   message: "Order created successfully",
//   order: {
//     order_id: mockOrderId,
//     amount: course.price,
//     currency: "INR",
//     course_title: course.title,
//   },
//   course,
// });
// });

// export const paymentVerification = TryCatch(async (req, res) => {
//   const { order_id, payment_status } = req.body;

//   // Simulate payment verification (mock logic)
//   const isPaymentSuccessful = payment_status === "success";

//   if (isPaymentSuccessful) {
//     // Save payment to DB
//     await Payment.create({
//       order_id,
//       status: "success",
//     });

//     // Add course to user subscription
//     const user = await User.findById(req.user._id);
//     const course = await Courses.findById(req.params.id);
//     user.subscription.push(course._id);
//     await user.save();

//     res.status(200).json({
//       message: "Payment successful. Course purchased successfully.",
//     });
//   } else {
//     // Save payment failure to DB
//     await Payment.create({
//       order_id,
//       status: "failed",
//     });

//     res.status(400).json({
//       message: "Payment failed. Please try again.",
//     });
//   }
// });