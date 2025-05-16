import React, { useEffect } from "react";
import { CourseData } from "../../context/CourseContext";
import "./courses.css";  

import CourseCard from '../../components/coursecard/CourseCard';

const Courses = () => {
    const { courses } = CourseData();
    console.log(courses);
   
    useEffect(() => {
        console.log("Courses in Context:", courses);  
    }, [courses]);  

    return (
        <div className="courses">
            <h2>Available Courses</h2>
            <div className="course-container">
                {courses && courses.length > 1 ? (
                    courses.map((e) => (
                        <CourseCard key={e._id} course={e} />
                    ))
                ) : (
                    <p>No Courses Available</p>
                )}
            </div>
        </div>
    );
};

export default Courses;


