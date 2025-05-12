import React, { useEffect } from "react";
import { CourseData } from "../../context/CourseContext";
import "./courses.css";  // Corrected path

import CourseCard from '../../components/coursecard/CourseCard';

const Courses = () => {
    const { courses } = CourseData();
    console.log(courses);
    // Log courses after they've been fetched
    useEffect(() => {
        console.log("Courses in Context:", courses);  // Log when courses are fetched and updated
    }, [courses]);  // This will run whenever the courses state is updated

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


