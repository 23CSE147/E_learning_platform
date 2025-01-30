import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { server } from '../main'; 
const CourseContext = createContext();


export const CourseContextProvider = ({ children }) => {
    const [courses, setCourses] = useState(null);

    //
    const [course, setCourse] = useState([]);
    //
  

   
    const [mycourse,setMyCourse]=useState([]);


    async function fetchCourses() {
        try {
            // console.log("Fetching courses from:", `${server}/api/course/all`); // Debug URL
            const response= await axios.get(`${server}/api/course/all`);
            console.log("Fetched Courses:", response.data);
            setCourses(response.data.courses);
        } catch (error) {
            console.log("Error fetching courses:", error);
        }
    }
    //course description code
    async function fetchCourse(id) {
        try {
            const { data } = await axios.get(`${server}/api/course/${id}`)
            setCourse(data.course)

        } catch (error) {
            console.log(error);

        }
    }

    //correct code
    async function fetchMyCourse() {
        try {
            const { data } = await axios.get(`${server}/api/mycourse`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
           // console.log(data.courses)
            setMyCourse(data.courses); // Use `data.courses` instead of `response.data.courses`
        } catch (error) {
            console.log(error);
        }
    }
    
   

      //previous code
    // async function fetchMyCourse() {
    //     try{
    //         console.log("hii")
    //         const {data}=await axios.get(`${server}/api/mycourse`,{
    //   headers:{
    //     token:localStorage.getItem("token"),
    //   }
    //         });
    //         setMyCourse(response.data.courses)
    //     }catch(error){
    //         console.log(error);
    //     }
        
    // }


    // const fetchCourses = async () => {
    //     try {
    //         const { data } = await axios.get(`${server}/api/course/all`);
    //         console.log("Fetched Data:", data); // Log data to check if courses are returned correctly
    //         if (data && data.courses && Array.isArray(data.courses)) {
    //             setCourses(data.courses);
    //         } else {
    //             console.log("Error: Invalid course data", data);
    //         }
    //     } catch (error) {
    //         console.log("Error fetching courses:", error);
    //         setCourses([]);
    //     }
    // };


    useEffect(() => {
        fetchCourses(); 
         fetchMyCourse();// Fetch courses when the component mounts
    }, []);

    // useEffect(() => {
    //     const fetchCourses = async () => {
    //         try {
    //             const response = await axios.get('/api/courses');
    //             setCourses(response.data.courses);  // Assuming the response has the correct data structure
    //         } catch (error) {
    //             console.error("Error fetching courses:", error);
    //         }
    //     };
    //     fetchCourses();
    // }, []);



    return <CourseContext.Provider value={{ courses, fetchCourses, fetchCourse, course,mycourse,fetchMyCourse }}>{children}</CourseContext.Provider>;

}

export const CourseData = () => useContext(CourseContext);


