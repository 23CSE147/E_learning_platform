
//correct code 
// import React from "react";
// import "./courseCard.css"
// import { server } from "../../main";
// import { UserData } from "../../context/UserContext";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { CourseData } from "../../context/CourseContext";
// const CourseCard = ({ course }) => {
//     const navigate = useNavigate();
//     const { user, isAuth } = UserData();

//     const { fetchCourses } = CourseData();

//     const deleteHandler = async (id) => {
//         if (!user || user.role !== "admin") {
//             toast.error("Unauthorized: Only admins can delete courses.");
//             return;
//         }

//         if (confirm("Are you sure you want to delete this course?")) {
//             try {
//                 const token = localStorage.getItem("token");
//                 if (!token) {
//                     toast.error("No token found. Please log in again.");
//                     return;
//                 }

//                 const { data } = await axios.delete(`${server}/api/course/${id}`, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });

//                 toast.success(data.message);
//                 fetchCourses();
//             } catch (error) {
//                 console.error("Error deleting course:", error.response?.data || error.message);
//                 toast.error(error.response?.data?.message || "Failed to delete course");
//             }
//         }
//     };

//     return (
//         <div className="course-card">
//             <img src={`${server}/${course.image}`} alt="" className="course-image" />
//             <h3>{course.title}</h3>
//             <p>Instructor - {course.createdBy}</p>
//             <p>Duration - {course.duration} weeks</p>
//             <p>Price - ₹{course.price}</p>
//             {isAuth ? (
//                 <>
//                     {user && user.role !== "admin" ? (
//                         <>
//                             {user.subscription.includes(course._id) ? (
//                                 <button
//                                     onClick={() => navigate(`/course/study/${course._id}`)}
//                                     className="common-btn"
//                                 >
//                                     Study
//                                 </button>
//                             ) : (
//                                 <button
//                                     onClick={() => navigate(`/course/${course._id}`)}
//                                     className="common-btn"
//                                 >
//                                     Get Started
//                                 </button>
//                             )}
//                         </>
//                     ) : (
//                         <button
//                             onClick={() => navigate(`/course/study/${course._id}`)}
//                             className="common-btn"
//                         >
//                             Study
//                         </button>
//                     )}
//                 </>
//             ) : (
//                 <button onClick={() => navigate("/login")} className="common-btn">
//                     Get Started
//                 </button>
//             )}
//             <br />
//             {
//                 user && user.role === "admin" && (<button onClick={() => deleteHandler(course._id)} className="common-btn" style={{ background: "red" }}>Delete</button>
//                 )}
//         </div>
//     );
// };

// export default CourseCard;
import React, { useEffect } from "react";
import "./courseCard.css";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const { fetchCourses, fetchMyCourse, myCourseIds } = CourseData();

  
  useEffect(() => {
    if (isAuth && user) {
      fetchMyCourse();
    }
  }, [isAuth, user, fetchMyCourse]);

 
  console.log("CourseCard - Course ID:", course._id);
  console.log("CourseCard - Is subscribed:", myCourseIds.has(course._id));
  console.log("CourseCard - MyCourseIds:", Array.from(myCourseIds));
  console.log("CourseCard - User subscription:", user?.subscription);

  const deleteHandler = async (id) => {
    if (!user || user.role !== "admin") {
      toast.error("Unauthorized: Only admins can delete courses.");
      return;
    }

    if (confirm("Are you sure you want to delete this course?")) {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("No token found. Please log in again.");
          return;
        }

        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        console.error("Error deleting course:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Failed to delete course");
      }
    }
  };

  return (
    <div className="course-card">
      <img src={`${server}/${course.image}`} alt="" className="course-image" />
      <h3>{course.title}</h3>
      <p>Instructor - {course.createdBy}</p>
      <p>Duration - {course.duration} weeks</p>
      <p>Price - ₹{course.price}</p>
      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {myCourseIds.has(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/course/${course._id}`)}
                  className="common-btn"
                >
                  Get Started
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          )}
        </>
      ) : (
        <button onClick={() => navigate("/login")} className="common-btn">
          Get Started
        </button>
      )}
      <br />
      {user && user.role === "admin" && (
        <button
          onClick={() => deleteHandler(course._id)}
          className="common-btn"
          style={{ background: "red" }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default CourseCard;