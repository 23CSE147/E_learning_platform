
//this also correct code but small mistake 
// import React, { useEffect, useState } from "react";
// import "./coursedescription.css";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import { server } from "../../main";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { UserData } from "../../context/UserContext"; // Import UserData

// //import Loading from "../../components/loading/Loading"


// const CourseDescription = ({ user }) => {
//     const params = useParams();
//     const navigate = useNavigate();
//     //console.log(params.id);

//     const [loading,setLoading]=useState(false);

//     const { fetchUser } = UserData(); // Fix spelling error


//     const { fetchCourse, course ,fetchCourses} = CourseData();

//     useEffect(() => {
//         fetchCourse(params.id)
//     }, [])

//     const checkoutHandler=async()=>{
//         const token =localStorage.getItem("token")
//         setLoading(true)

//         const {data:{order}} =await axios.post(`${server}/api/course/checkout/${params.id}`,{},{
//             headers:{
//                 token,
//             },
//         }
//     );
//     const options = {
//     key: "rzp_test_QgcOFqCvOK6IAq", // Enter the Key ID generated from the Dashboard
//     amount: order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     currency: "INR",
//     name: "E Learning", //your business name
//     description: "Learn with us",
//    // "image": "https://example.com/your_logo",
//     order_id: order.id , //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

//     handler : async function (response) {
//         const {razorpay_order_id, razorpay_payment_id, razorpay_signature }=response;
//         try {
//             const {data} =await axios.post(`${server}/api/verification/${params.id}`,{
//                 razorpay_order_id, 
//                 razorpay_payment_id, 
//                 razorpay_signature
//                 },
//                 {
//                     headers:{
//                         token,
//                     }
//                 }
//             )
//             await fectchUser();
//             await fetchCourses();
//             toast.success(data.message);
//             setLoading(false)
//             navigate(`/payment-success/${razorpay_payment_id}`)
//         } catch (error) {
//             toast.error(error.respone.data.message)
//             setLoading(false)
//         }
//     },
//     theme: {
//         color: "#8a4baf"
//     }
//     }
//     const razorpay= new window.Razorpay(options);

//     razorpay.open()
//     };

//     return (
//       <>
      
//         {/* // loading ? <Loading/> :(   */}
//         <>
//             {course && (
//                 <div className="course-description">
//                     <div className="course-header">
//                         <img src={`${server}/${course.image}`} alt="" className="course-image" />
//                         <div className="course-info">
//                             <h2>{course.title}</h2>
//                             <p>Instructor : {course.createdBy} </p>
//                             <p>Duration : {course.duration} weeks</p>
//                         </div>


//                     </div>
//                     <p>{course.description}</p>
//                     <p>Let's get started with course At ₹{course.price}</p>
//                     {user && user.subscription && user.subscription.includes(course._id) ? (
//                         <button onClick={() => navigate(`/course/study/${course._id}`)} className="common-btn">Study</button>
//                     ) : (
//                         <button onClick={checkoutHandler} className="common-btn">Buy Now</button>
//                     )}
//                 </div>
//             )}
//         </>

      
//       </>
//     )
// }

// export default CourseDescription;




// import React, { useEffect, useState } from "react";
// import "./coursedescription.css";
// import { useNavigate, useParams } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import { server } from "../../main";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { UserData } from "../../context/UserContext"; 

// const CourseDescription = ({ user }) => {
//     const params = useParams();
//     const navigate = useNavigate();

//     const { fetchUser } = UserData(); 
//     const { fetchCourse, course, fetchCourses } = CourseData();

//     useEffect(() => {
//         fetchCourse(params.id);
//     }, [params.id]);

//     const checkoutHandler = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             console.log("Token:", token);
//             const { data: { order } } = await axios.post(
//                 `${server}/api/checkout/${params.id}`,
//                 {},
//                 { headers: { token } }
//             );

//             const options = {
//                 key: "rzp_test_QgcOFqCvOK6IAq",
//                 amount: order.id,
//                 currency: "INR",
//                 name: "E Learning",
//                 description: "Learn with us",
//                 order_id: order.id,
//                 handler: async function (response) {
//                     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
//                     try {
//                         const { data } = await axios.post(
//                             `${server}/api/verification/${params.id}`,
//                             { razorpay_order_id, razorpay_payment_id, razorpay_signature },
//                             { headers: { token } }
//                         );
//                         await fetchUser();
//                         await fetchCourses();
//                         toast.success(data.message);
//                         navigate(`/payment-success/${razorpay_payment_id}`);
//                     } catch (error) {
//                         toast.error(error.response?.data?.message || "Payment verification failed");
//                     }
//                 },
//                 theme: { color: "#8a4baf" }
//             };

//             const razorpay = new window.Razorpay(options);
//             razorpay.open();
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Checkout failed");
//         }
//     };

//     return (
//         <>
//             {course && (
//                 <div className="course-description">
//                     <div className="course-header">
//                         <img src={`${server}/${course.image}`} alt="Course" className="course-image" />
//                         <div className="course-info">
//                             <h2>{course.title}</h2>
//                             <p>Instructor: {course.createdBy}</p>
//                             <p>Duration: {course.duration} weeks</p>
//                         </div>
//                     </div>
//                     <p>{course.description}</p>
//                     <p>Let's get started with the course at ₹{course.price}</p>
//                     {user && user.subscription?.includes(course._id) ? (
//                         <button onClick={() => navigate(`/course/study/${course._id}`)} className="common-btn">
//                             Study
//                         </button>
//                     ) : (
//                         <button onClick={checkoutHandler} className="common-btn">
//                             Buy Now
//                         </button>
//                     )}
//                 </div>
//             )}
//         </>
//     );
// };

// export default CourseDescription;


//correct code

// import React, { useEffect, useState } from "react";
// import "./coursedescription.css";
// import { useNavigate, useParams } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import { server } from "../../main";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { UserData } from "../../context/UserContext"; 

// const CourseDescription = ({ user }) => {
//     const params = useParams();
//     const navigate = useNavigate();

//     const { fetchUser } = UserData(); 
//     const { fetchCourse, course, fetchCourses } = CourseData();

//     useEffect(() => {
//         fetchCourse(params.id);
//     }, [params.id]);

//     const checkoutHandler = async () => {
//         try {
//             const token = localStorage.getItem("token");
            
//             const { data: { order } } = await axios.post(
//                 `${server}/api/checkout/${params.id}`,
//                 {},
//                 { headers: { token } }
//             );

//             const options = {
//                 key: "rzp_test_QgcOFqCvOK6IAq",
//                 amount: order.id,
//                 currency: "INR",
//                 name: "E Learning",
//                 description: "Learn with us",
//                 order_id: order.id,
//                 handler: async function (response) {
//                     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
//                     try {
//                         const { data } = await axios.post(
//                             `${server}/api/verification/${params.id}`,
//                             { razorpay_order_id, razorpay_payment_id, razorpay_signature },
//                             { headers: { token } }
//                         );
//                         await fetchUser();
//                         await fetchCourses();
//                         toast.success(data.message);
//                         navigate(`/payment-success/${razorpay_payment_id}`);
//                     } catch (error) {
//                         toast.error(error.response?.data?.message || "Payment verification failed");
//                     }
//                 },
//                 theme: { color: "#8a4baf" }
//             };

//             const razorpay = new window.Razorpay(options);
//             razorpay.open();
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Checkout failed");
//         }
//     };

//     return (
//         <>
//             {course && (
//                 <div className="course-description">
//                     <div className="course-header">
//                         <img src={`${server}/${course.image}`} alt="Course" className="course-image" />
//                         <div className="course-info">
//                             <h2>{course.title}</h2>
//                             <p>Instructor: {course.createdBy}</p>
//                             <p>Duration: {course.duration} weeks</p>
//                         </div>
//                     </div>
//                     <p>{course.description}</p>
//                     <p>Let's get started with the course at ₹{course.price}</p>
//                     {user && user.subscription?.includes(course._id) ? (
//                         <button onClick={() => navigate(`/course/study/${course._id}`)} className="common-btn">
//                             Study
//                         </button>
//                     ) : (
//                         <button onClick={checkoutHandler} className="common-btn">
//                             Buy Now
//                         </button>
//                     )}
//                 </div>
//             )}
//         </>
//     );
// };

// export default CourseDescription;




//correct code
import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";


const CourseDescription = ({ user }) => {
    const params = useParams();
    const navigate = useNavigate();

    const { fetchUser } = UserData();
    const { fetchCourse, course, fetchCourses,fetchMyCourse } = CourseData();

    useEffect(() => {
        fetchCourse(params.id);
    }, [params.id]);

    const checkoutHandler = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Authentication error: No token found.");
                navigate("/login");
                return;
            }
    
            console.log("Token:", token);
            const { data: { order } } = await axios.post(
                `${server}/api/checkout/${params.id}`,
                {},
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            const options = {
                key: "rzp_test_QgcOFqCvOK6IAq",
                amount: order.amount,
                currency: "INR",
                name: "E Learning",
                description: "Learn with us",
                order_id: order.id,
                handler: async function (response) {
                    try {
                        const { data } = await axios.post(
                            `${server}/api/verification/${params.id}`,
                            {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                            },
                            { headers: { Authorization: `Bearer ${token}` } }
                        );
    
                        await fetchUser();
                        await fetchCourses();
                        await fetchMyCourse();
                        toast.success(data.message);
                        navigate(`/payment-success/${response.razorpay_payment_id}`);
                    } catch (error) {
                        toast.error(error.response?.data?.message || "Payment verification failed");
                    }
                },
                theme: { color: "#8a4baf" }
            };
    
            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            toast.error(error.response?.data?.message || "Checkout failed");
        }
    };
    
    //correct code
    // const checkoutHandler = async () => {
    //     try {
    //         const token = localStorage.getItem("token");
    //         if (!token) {
    //             toast.error("Authentication error: No token found.");
    //             return;
    //         }

    //         console.log("Token:", token);
    //         const { data: { order } } = await axios.post(
    //             `${server}/api/checkout/${params.id}`,
    //             {},
    //             { headers: { Authorization: `Bearer ${token}` }
                
    //         }
    //         );

    //         const options = {
    //             key: "rzp_test_QgcOFqCvOK6IAq",
    //             amount: order.amount, // Ensure this is correct
    //             currency: "INR",
    //             name: "E Learning",
    //             description: "Learn with us",
    //             order_id: order.id,
    //             handler: async function (response) {
    //                 try {
    //                     const { data } = await axios.post(
    //                         `${server}/api/verification/${params.id}`,
    //                         {
    //                             razorpay_order_id: response.razorpay_order_id,
    //                             razorpay_payment_id: response.razorpay_payment_id,
    //                             razorpay_signature: response.razorpay_signature,
    //                             // razorpay_order_id,
    //                             // razorpay_payment_id,
    //                             // razorpay_signature,
    //                         },
    //                         { headers: { Authorization: `Bearer ${token}` } }
    //                     );

    //                     await fetchUser();
    //                     await fetchCourses();
    //                     await fetchMyCourse();
    //                     toast.success(data.message);
    //                     navigate(`/payment-success/${response.razorpay_payment_id}`);
    //                 } catch (error) {
    //                     toast.error(error.response?.data?.message || "Payment verification failed");
    //                 }
    //             },
    //             theme: { color: "#8a4baf" }
    //         };

    //         const razorpay = new window.Razorpay(options);
    //         razorpay.open();
    //     } catch (error) {
    //         toast.error(error.response?.data?.message || "Checkout failed");
    //     }
    // };

    return (
        <>
            {course && (
                <div className="course-description">
                    <div className="course-header">
                        <img src={`${server}/${course.image}`} alt="Course" className="course-image" />
                        <div className="course-info">
                            <h2>{course.title}</h2>
                            <p>Instructor: {course.createdBy}</p>
                            <p>Duration: {course.duration} weeks</p>
                        </div>
                    </div>
                    <p>{course.description}</p>
                    <p>Let's get started with the course at ₹{course.price}</p>
                    {user && user.subscription?.includes(course._id) ? (
                        <button onClick={() => navigate(`/course/study/${course._id}`)} className="common-btn">
                            Study
                        </button>
                    ) : (
                        <button onClick={checkoutHandler} className="common-btn">
                            Buy Now
                        </button>
                    )}
                </div>
            ) }
        </>
    );
};

export default CourseDescription;




// import React, { useEffect, useState } from "react";
// import "./coursedescription.css";
// import { useNavigate, useParams } from "react-router-dom";
// import { CourseData } from "../../context/CourseContext";
// import { server } from "../../main";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { UserData } from "../../context/UserContext"; 

// const CourseDescription = ({ user }) => {
//     const params = useParams();
//     const navigate = useNavigate();

//     const { fetchUser } = UserData(); 
//     const { fetchCourse, course, fetchCourses } = CourseData();

//     useEffect(() => {
//         fetchCourse(params.id);
//     }, [params.id]);

//     const checkoutHandler = async () => {
//         try {
//             const token = localStorage.getItem("token");
//             console.log("Token:", token);
//             const { data: { order } } = await axios.post(
//                 `${server}/api/checkout/${params.id}`,
//                 {},
//                 { headers: { token } }
//             );

//             const options = {
//                 key: "rzp_test_QgcOFqCvOK6IAq",
//                 amount: order.id,
//                 currency: "INR",
//                 name: "E Learning",
//                 description: "Learn with us",
//                 order_id: order.id,
//                 handler: async function (response) {
//                     const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
//                     try {
//                         const { data } = await axios.post(
//                             `${server}/api/verification/${params.id}`,
//                             { razorpay_order_id, razorpay_payment_id, razorpay_signature },
//                             { headers: { token } }
//                         );
//                         await fetchUser();
//                         await fetchCourses();
//                         toast.success(data.message);
//                         navigate(`/payment-success/${razorpay_payment_id}`);
//                     } catch (error) {
//                         toast.error(error.response?.data?.message || "Payment verification failed");
//                     }
//                 },
//                 theme: { color: "#8a4baf" }
//             };

//             const razorpay = new window.Razorpay(options);
//             razorpay.open();
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Checkout failed");
//         }
//     };

//     return (
//         <>
//             {course && (
//                 <div className="course-description">
//                     <div className="course-header">
//                         <img src={`${server}/${course.image}`} alt="Course" className="course-image" />
//                         <div className="course-info">
//                             <h2>{course.title}</h2>
//                             <p>Instructor: {course.createdBy}</p>
//                             <p>Duration: {course.duration} weeks</p>
//                         </div>
//                     </div>
//                     <p>{course.description}</p>
//                     <p>Let's get started with the course at ₹{course.price}</p>
//                     {user && user.subscription?.includes(course._id) ? (
//                         <button onClick={() => navigate(`/course/study/${course._id}`)} className="common-btn">
//                             Study
//                         </button>
//                     ) : (
//                         <button onClick={checkoutHandler} className="common-btn">
//                             Buy Now
//                         </button>
//                     )}
//                 </div>
//             )}
//         </>
//     );
// };

// export default CourseDescription;
