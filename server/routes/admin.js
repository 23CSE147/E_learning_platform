
import express from "express";
import { addLectures, createCourse, deleteCourse, deleteLecture, getAllStats } from "../controllers/admin.js";  
import { isAuth, isAdmin } from "../middlewares/auth.js";  
import { uploadFiles } from "../middlewares/multer.js"; 

const router = express.Router();

router.post('/course/new', isAuth, isAdmin, uploadFiles, createCourse);
router.post('/course/:id',isAuth,isAdmin,uploadFiles,addLectures);
router.delete('/course/:id',isAuth,isAdmin,uploadFiles,deleteCourse);
router.delete('/lecture/:id',isAuth,isAdmin,deleteLecture)
router.get('/stats',isAuth,isAdmin,getAllStats);

export default router;
