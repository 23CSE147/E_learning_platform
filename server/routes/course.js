//correct code


import express from "express";
//import { getAllCourses, getSingleCourse } from "../controllers/course.js";
import {
  getAllCourses,
  getSingleCourse,
  fetchLectures,
  fetchLecture,
  getMyCourses,
  checkout,
  paymentVerification,
} from "../controllers/course.js";
import { isAuth } from "../middlewares/auth.js";
//import { checkout, paymentVerification } from "../controllers/course.js";

const router = express.Router()
router.get('/course/all', getAllCourses);
router.get('/course/:id', getSingleCourse);
router.get('/lectures/:id', isAuth, fetchLectures)
router.get('/lecture/:id', isAuth, fetchLecture)
router.get('/mycourse', isAuth, getMyCourses)
router.post("/checkout/:id", isAuth, checkout)
router.post("/verification/:id", isAuth, paymentVerification)




export default router;



// import express from "express";
// import {
//     getAllCourses,
//     getSingleCourse,
//     fetchLectures,
//     fetchLecture,
//     getMyCourses,
//     checkout,
//     paymentVerification,
// } from "../controllers/course.js";
// import { isAuth } from "../middlewares/auth.js";

// const router = express.Router();

// // Register the checkout route
// router.post("/checkout/:id", isAuth, checkout);  // This line registers the checkout route

// router.get("/course/all", getAllCourses);
// router.get("/course/:id", getSingleCourse);
// router.get("/lectures/:id", isAuth, fetchLectures);
// router.get("/lecture/:id", isAuth, fetchLecture);
// router.get("/mycourse", isAuth, getMyCourses);

// router.post("/verification/:id", isAuth, paymentVerification);

// export default router;
