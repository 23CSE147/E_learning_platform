// import React, { useEffect } from "react";
// import './coursestudy.css';
// import {Link, useNavigate, useParams} from 'react-router-dom';
// import {CourseData} from '../../context/CourseContext'
// import { server } from "../../main";
// const CourseStudy=({user})=>{
//     const params=useParams();
//     const {fetchCourse,course}=CourseData();
//     const navigate =useNavigate();
//     if(user && user.role !== "admin" && !user.subscription.includes(params.id))
//         return navigate("/")


//     useEffect(()=>{
//         fetchCourse(params.id);
//     },[])
//     return (
//     <>{course && (
//     <div className="course-study-page">
//         <img src={`${server}/${course.image}`} alt="" width={350} />
//         <h2>{course.title}</h2>
//         <h4>{course.descripition}</h4>
//         <h5>by - {course.createdBy}</h5>
//         <h5>Duration - {course.duration} weeks</h5>
//         <Link to={`/lecture/${course._id}`}><h2>Lectures</h2></Link>
//         </div>
//     )}
//     </>
//     )
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

    // Redirect if user is not authorized
    useEffect(() => {
        if (user && user.role !== "admin" && !user.subscription.includes(params.id)) {
            navigate("/");
        }
    }, [user, params.id, navigate]);

    // Fetch course details
    useEffect(() => {
        fetchCourse(params.id);
    }, [params.id, fetchCourse]);

    return (
        <>
            {course && (
                <div className="course-study-page">
                    <img src={`${server}/${course.image}`} alt={course.title} width={350} />
                    <h4>{course.title}</h4>
                    <h5>{course.description}</h5>  {/* ✅ Fixed: Use 'description' (spelling correction) */}
                    <h5>by - {course.createBy}</h5>
                    <h5>Duration - {course.duration} weeks</h5>
                    <Link to={`/lectures/${course._id}`}><h2>Lectures</h2></Link>
                </div>
            )}
        </>
    );
}

export default CourseStudy;
