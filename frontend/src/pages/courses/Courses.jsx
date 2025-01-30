// import React from 'react';
// import { CourseData } from "../../context/CourseContext";
// import "./Courses.css";
// import CourseCard from '../../components/coursecard/CourseCard';
// //import { CourseContext } from '../../context/CourseContext';  // Adjust the path if needed


// const Courses = () => {
//     const { courses } = CourseData();
//     console.log("Courses in Context:", courses);

//     return (
//         <div className="courses">
//             <h2>Available Courses</h2>
//             <div className="course-container">
//                 {courses && courses.length > 1 ? (
//                     courses.map((course) => (
//                         <CourseCard key={course._id} course={course} />
//                     ))
//                 ) : (
//                     <p>No Courses Available</p>
//                 )}
//             </div>
//         </div>
//     );
// };
// // const Courses = () => {
// //     const { courses, fetchCourses } = useContext(CourseContext);

// //     useEffect(() => {
// //         fetchCourses();  // Fetch courses if not already fetched
// //     }, [fetchCourses]);

// //     return (
// //         <div>
// //             <h1>Courses</h1>
// //             {courses && courses.length > 0 ? (
// //                 courses.map(course => <div key={course.id}>{course.name}</div>)
// //             ) : (
// //                 <p>No courses available</p>
// //             )}
// //         </div>
// //     );
// // };

// export default Courses;



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


