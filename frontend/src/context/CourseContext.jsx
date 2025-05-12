
//correct code
// import { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { server } from '../main';
// const CourseContext = createContext();


// export const CourseContextProvider = ({ children }) => {
//     const [courses, setCourses] = useState([]);
//     const [course, setCourse] = useState([]);
//     const [mycourse, setMyCourse] = useState([]);
//     const [myCourseIds, setMyCourseIds] = useState(new Set()); // ✅ new state to store bought course IDs

//     async function fetchCourses() {
//         try {
//             // console.log("Fetching courses from:", `${server}/api/course/all`); // Debug URL
//             const response = await axios.get(`${server}/api/course/all`);
//             setCourses(response.data.courses); 
//             console.log("Fetched Courses:", response.data);

//         } catch (error) {
//             console.log("Error fetching courses:", error);
//         }
//     }
//     //course description code
//     async function fetchCourse(id) {
//         try {
//             const { data } = await axios.get(`${server}/api/course/${id}`)
//             setCourse(data.course)

//         } catch (error) {
//             console.log(error);

//         }
//     }

//     //correct code
//     async function fetchMyCourse() {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             console.log("No token found, user might not be logged in");
//             return;
//         }

//         try {
//             const { data } = await axios.get(`${server}/api/mycourse`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 },
//             });
//             // console.log(data.courses)
//             // setMyCourse(data.courses); // Use `data.courses` instead of `response.data.courses`

//             const courseList = data.courses;
//             setMyCourse(courseList);
//             setMyCourseIds(new Set(courseList.map((course) => course._id))); 
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         fetchCourses();
//         fetchMyCourse();// Fetch courses when the component mounts
//     }, []); // Add fetchMyCourse to the dependency array

//     // useEffect(() => {
//     //     const fetchCourses = async () => {
//     //         try {
//     //             const response = await axios.get('/api/courses');
//     //             setCourses(response.data.courses);  // Assuming the response has the correct data structure
//     //         } catch (error) {
//     //             console.error("Error fetching courses:", error);
//     //         }
//     //     };
//     //     fetchCourses();
//     // }, []);



//     return <CourseContext.Provider value={{ courses, fetchCourses, fetchCourse, course, mycourse, myCourseIds, fetchMyCourse }}>{children}</CourseContext.Provider>;

// }

// export const CourseData = () => useContext(CourseContext);





import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { server } from "../main";

const CourseContext = createContext();

export const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(null);
  const [mycourse, setMyCourse] = useState([]);
  const [myCourseIds, setMyCourseIds] = useState(new Set());

  async function fetchCourses() {
    try {
      const response = await axios.get(`${server}/api/course/all`);
      setCourses(response.data.courses);
      console.log("Fetched Courses:", response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }

  async function fetchCourse(id) {
    try {
      const { data } = await axios.get(`${server}/api/course/${id}`);
      setCourse(data.course);
      console.log("Fetched Course:", data.course);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  }

  async function fetchMyCourse() {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("No token found, user might not be logged in");
      setMyCourse([]);
      setMyCourseIds(new Set());
      return;
    }

    try {
      const { data } = await axios.get(`${server}/api/mycourse`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const courseList = data.courses || [];
      setMyCourse(courseList);
      setMyCourseIds(new Set(courseList.map((course) => course._id)));
      console.log("Fetched My Courses:", courseList);
      console.log("My Course IDs:", Array.from(new Set(courseList.map((course) => course._id))));
    } catch (error) {
      console.error("Error fetching my courses:", error);
      setMyCourse([]);
      setMyCourseIds(new Set());
    }
  }

  useEffect(() => {
    fetchCourses();
    fetchMyCourse();
  }, []);

  return (
    <CourseContext.Provider
      value={{ courses, fetchCourses, fetchCourse, course, mycourse, myCourseIds, fetchMyCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const CourseData = () => useContext(CourseContext);