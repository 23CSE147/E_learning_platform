
import express from "express";
import { addLectures, createCourse, deleteCourse, deleteLecture, getAllStats, getAllUser, updateRole,deleteUser} from "../controllers/admin.js";  
import { isAuth, isAdmin } from "../middlewares/auth.js";  
import { uploadFiles } from "../middlewares/multer.js"; 

const router = express.Router();

router.post('/course/new', isAuth, isAdmin, uploadFiles, createCourse);
router.post('/course/:id',isAuth,isAdmin,uploadFiles,addLectures);
router.delete('/course/:id',isAuth,isAdmin,uploadFiles,deleteCourse);
router.delete('/lecture/:id',isAuth,isAdmin,deleteLecture)
router.get('/stats',isAuth,isAdmin,getAllStats);
router.put('/user/:id',isAuth,isAdmin,updateRole);
router.delete("/user/:id", isAuth,isAdmin, deleteUser);
router.get("/users",isAuth,isAdmin,getAllUser);

export default router;
