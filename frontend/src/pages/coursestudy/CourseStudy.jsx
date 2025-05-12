// import React, { useEffect } from "react";
// import './coursestudy.css';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { CourseData } from '../../context/CourseContext';
// import { server } from "../../main";

// const CourseStudy = ({ user }) => {
//     const params = useParams();
//     const { fetchCourse, course } = CourseData();
//     const navigate = useNavigate();
//     if (user && user.role !== "admin" && !user.subscription.includes(params.id))
//         return navigate("/");

//     useEffect(() => {
//         fetchCourse(params.id);
//     }, []);

//     return (
//         <>
//             {course && (
//                 <div className="course-study-page">
//                     <img src={`${server}/${course.image}`} alt={course.title} width={350} />
//                     <h4>{course.title}</h4>
//                     <p className="course-des">{course.description}</p>  {/* ✅ Fixed: Use 'description' (spelling correction) */}
//                     <p>by - {course.createdBy}</p>
//                     <p>Duration - {course.duration} weeks</p>
//                     <Link to={`/lectures/${course._id}`}>
//                         <h2>Lectures</h2>
//                     </Link>
//                 </div>
//             )}
//         </>



//     );
// }
// export default CourseStudy;






import React, { useEffect } from "react";
import './coursestudy.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CourseData } from '../../context/CourseContext';
import { server } from "../../main";

const CourseStudy = ({ user }) => {
    const params = useParams();
    const { fetchCourse, course } = CourseData();
    const navigate = useNavigate();

    if (user && user.role !== "admin" && !user.subscription.includes(params.id))
        return navigate("/");

    useEffect(() => {
        fetchCourse(params.id);
    }, []);

    return (
        <>
            {course && (
                <div className="course-study-page">
                    <div className="course-content">
                        <div className="course-image-section">
                            <img src={`${server}/${course.image}`} alt={course.title} />
                        </div>
                        <div className="course-des">
                            <h2>{course.title}</h2><br/>
                            <h3>Course Description</h3><br/>
                            <p>{course.description}</p><br/>
                            {/* <p>by - {course.createdBy}</p>
                            <p>Duration - {course.duration} weeks</p> */}

                            <p className="course-meta created-by">Instructor: - {course.createdBy}</p><br />
                            <p className="course-meta duration">Duration of course: - {course.duration} weeks</p>
                        </div>
                    </div>
                    <div className="course-footer">
                        <Link to={`/lectures/${course._id}`} className="continue-btn">
                            Continue
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default CourseStudy;














//modified code for css
// const CourseStudy = ({ user }) => {
//     const params = useParams();
//     const { fetchCourse, course } = CourseData();
//     const navigate = useNavigate();

//     // Redirect if user doesn't have access to the course
//     if (user && user.role !== "admin" && !user.subscription.includes(params.id))
//         return navigate("/");

//     useEffect(() => {
//         fetchCourse(params.id);
//     }, [params.id]);

//     return (
//         <>
//         {course && (
//             <div className="course-study-page">
//                 <div className="course-image">
//                     <img src={`${server}/${course.image}`} alt={course.title} />
//                 </div>
//                 <div className="course-details">
//                     <h4 className="course-title">{course.title}</h4>
//                     <p className="course-description">{course.description}</p>
//                     {/* <div className="course-price">
//                         <h5>Price: ${course.price}</h5>
//                     </div> */}
//                     <h5>by - {course.createdBy}</h5>
//                     <h5>Duration - {course.duration} weeks</h5>
//                     <Link to={`/lectures/${course._id}`} className="course-lectures-link">
//                         <h2>Lectures</h2>
//                     </Link>
//                 </div>
//             </div>
//         )}
//     </>
//     );
// }


// export default CourseStudy;










// import React from "react";
// import { Link } from "react-router-dom";
// import "./coursestudy.css"; // Import CSS file

// const CourseCard = () => {
//   return (
//     <div className="course-card">
//       {/* Course Category */}
//       <span className="course-category">Frontend Development</span>

//       {/* Course Title & Logo */}
//       <div className="course-header">
//         <h3 className="course-title">Learn Angular.js from Scratch to Experts</h3>
//         <img src="/angular-logo.png" alt="Angular" className="course-icon" />
//       </div>

//       {/* Progress Bar */}
//       <div className="progress-container">
//         <span className="progress-text">2:35h of 4:30h</span>
//         <div className="progress-bar">
//           <div className="progress-fill" style={{ width: "80%" }}></div>
//         </div>
//         <span className="progress-percent">80%</span>
//       </div>

//       {/* Continue Button */}
//       <Link to="/lectures" className="continue-btn">
//         Continue ▶
//       </Link>
//     </div>
//   );
// };

// export default CourseCard;
