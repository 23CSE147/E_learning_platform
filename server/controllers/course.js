import TryCatch from "../middlewares/TryCatch.js";
import { Courses } from "../models/Course.js";
import { Lecture } from "../models/Lecture.js";
import { User } from "../models/User.js";
//import {instance} from "../index.js"
import crypto from 'crypto';
import { Payment } from "../models/Payment.js";
import { instance } from "../index.js";

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


export const getMyCourses = TryCatch(async (req, res) => {
  const courses = await Courses.find({ _id: req.user.subscription })
console.log("My Courses:", courses);
  res.json({
    courses,
  })
})


export const checkout = TryCatch(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const course = await Courses.findById(req.params.id);

    if (user.subscription.includes(course._id)) {
      return res.status(400).json({
        message: "You already have this course",
      });
    }

    const options = {
      amount: Number(course.price * 100),
      currency: "INR",
    };

    const order = await instance.orders.create(options);
    res.status(201).json({
      order,
      course,
    });
  } catch (error) {
    console.error("Error in checkout: ", error); // Log the error for better debugging
    res.status(500).json({
      message: "An error occurred while processing the checkout request",
      error: error.message,
    });
  }
});

export const paymentVerification = TryCatch(async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.Razorpay_Secret)
    .update(body.toString())
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({
      message: "Payment Verification Failed",
    });
  }


  await Payment.create({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    user: req.user._id,
  });

  const user = await User.findById(req.user._id);
  const course = await Courses.findById(courseId);

  if (!user.subscription.includes(course._id)) { // Avoid duplicate subscription
    user.subscription.push(course._id);
    await user.save();
  }

  res.status(200).json({
    message: `Congratulations! You are now enrolled in the course: ${course.title}`,
  });
});