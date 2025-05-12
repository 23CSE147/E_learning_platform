//correct code
// import React, { useEffect } from "react";
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
//     const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

//     useEffect(() => {
//         fetchCourse(params.id);
//     }, [params.id]);

    // const checkoutHandler = async () => {
    //     try {
    //         const token = localStorage.getItem("token");
    //         if (!token) {
    //             toast.error("Authentication error: No token found.");
    //             navigate("/login");
    //             return;
    //         }

    //         console.log("Token:", token);
    //         const { data: { order } } = await axios.post(
    //             `${server}/api/checkout/${params.id}`,
    //             {},
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );

    //         const options = {
    //             key: "rzp_test_QgcOFqCvOK6IAq",
    //             amount: order.amount,
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



    //             // handler: async function (response) {
    //             //     try {
    //             //       const { data } = await axios.post(
    //             //         `${server}/api/verification/${params.id}`,
    //             //         {
    //             //           razorpay_order_id: response.razorpay_order_id,
    //             //           razorpay_payment_id: response.razorpay_payment_id,
    //             //           razorpay_signature: response.razorpay_signature,
    //             //           courseId: params.id, // ✅ important!
    //             //         },
    //             //         { headers: { Authorization: `Bearer ${token}` } }
    //             //       );
                  
    //             //       await fetchUser();
    //             //       await fetchCourses();
    //             //       await fetchMyCourse();
    //             //       toast.success(data.message);
    //             //       navigate(`/payment-success/${response.razorpay_payment_id}`);
    //             //     } catch (error) {
    //             //       toast.error(error.response?.data?.message || "Payment verification failed");
    //             //     }
    //             //   },
                  
    //             theme: { color: "#8a4baf" }
    //         };

    //         const razorpay = new window.Razorpay(options);
    //         razorpay.open();
    //     } catch (error) {
    //         toast.error(error.response?.data?.message || "Checkout failed");
    //     }
    // };

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
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );
    
    //         const options = {
    //             key: "rzp_test_QgcOFqCvOK6IAq",
    //             amount: order.amount,
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
    //                         },
    //                         { headers: { Authorization: `Bearer ${token}` } }
    //                     );
    
    //                     await fetchUser();
    //                     await fetchCourses();
    //                     await fetchMyCourse();
    //                     toast.success(data.message);
    //                     navigate(`/payment-success/${response.razorpay_payment_id}`);
    //                 } catch (error) {
    //                     console.error("Verification error:", error);  // Log full error
    //                     toast.error(error.response?.data?.message || "Payment verification failed");
    //                 }
    //             },
    //             theme: { color: "#8a4baf" }
    //         };
    
    //         const razorpay = new window.Razorpay(options);
    //         razorpay.open();
    //     } catch (error) {
    //         console.error("Checkout error:", error);  // Log full error
    //         toast.error(error.response?.data?.message || "Checkout failed");
    //     }
    // };
//     const CourseDescription = ({ user }) => {
//         const params = useParams();
//         const navigate = useNavigate();
    
//         const { fetchUser } = UserData();
//         const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();
    
//         useEffect(() => {
//             fetchCourse(params.id);
//         }, [params.id]);
    
//         const checkoutHandler = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 if (!token) {
//                     toast.error("Authentication error: No token found.");
//                     navigate("/login");
//                     return;
//                 }
    
//                 console.log("Token:", token);
//                 const { data: { order } } = await axios.post(
//                     `${server}/api/checkout/${params.id}`,
//                     {},
//                     { headers: { Authorization: `Bearer ${token}` } }
//                 );
    
//                 const options = {
//                     key: "rzp_test_QgcOFqCvOK6IAq",
//                     amount: order.amount,
//                     currency: "INR",
//                     name: "E Learning",
//                     description: "Learn with us",
//                     order_id: order.id,
//                     handler: async function (response) {
//                         try {
//                             const { data } = await axios.post(
//                                 `${server}/api/verification/${params.id}`,
//                                 {
//                                     // razorpay_order_id: response.razorpay_order_id,
//                                     // razorpay_payment_id: response.razorpay_payment_id,
//                                     // razorpay_signature: response.razorpay_signature,

                                    
//                                         razorpay_order_id: response.razorpay_order_id,
//                                         razorpay_payment_id: response.razorpay_payment_id,
//                                         razorpay_signature: response.razorpay_signature,
//                                         courseId: params.id // ✅ optional, if required by backend
                                      
                                      
//                                 },
//                                 { headers: { Authorization: `Bearer ${token}` } }
//                             );
    
//                             await fetchUser();
//                             await fetchCourses();
//                             await fetchMyCourse();
//                             toast.success(data.message);
//                             navigate(`/payment-success/${response.razorpay_payment_id}`);
//                         } catch (error) {
//                             toast.error(error.response?.data?.message || "Payment verification failed");
//                         }
//                     },
//                     theme: { color: "#8a4baf" }
//                 };
    
//                 const razorpay = new window.Razorpay(options);
//                 razorpay.open();
//             } catch (error) {
//                 toast.error(error.response?.data?.message || "Checkout failed");
//             }
//         };
    
    
    
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












import React, { useEffect } from "react";
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
  const { fetchCourse, course, fetchCourses, fetchMyCourse, myCourseIds } = CourseData();

  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id, fetchCourse]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const checkoutHandler = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication error: No token found.");
        navigate("/login");
        return;
      }

      const {
        data: { order },
      } = await axios.post(
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
                courseId: params.id,
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            await fetchUser();
            await fetchCourses();
            await fetchMyCourse();
            toast.success(data.message);
            navigate(`/payment-success/${response.razorpay_payment_id}`);
          } catch (error) {
            console.error("Payment verification error:", error);
            toast.error(
              error.response?.data?.message || "Payment verification failed"
            );
          }
        },
        theme: { color: "#8a4baf" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(error.response?.data?.message || "Checkout failed");
    }
  };

  // Debug subscription status
  useEffect(() => {
    if (user && course) {
      console.log("CourseDescription - User subscription:", user.subscription);
      console.log("CourseDescription - Course ID:", course._id);
      console.log("CourseDescription - Is subscribed:", myCourseIds.has(course._id));
      console.log("CourseDescription - MyCourseIds:", Array.from(myCourseIds));
    }
  }, [user, course, myCourseIds]);

  return (
    <>
      {course && (
        <div className="course-description">
          <div className="course-header">
            <img
              src={`${server}/${course.image}`}
              alt="Course"
              className="course-image"
            />
            <div className="course-info">
              <h2>{course.title}</h2>
              <p>Instructor: {course.createdBy}</p>
              <p>Duration: {course.duration} weeks</p>
            </div>
          </div>
          <p>{course.description}</p>
          <p>Let's get started with the course at ₹{course.price}</p>
          {user && myCourseIds.has(course._id) ? (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn"
            >
              Study
            </button>
          ) : (
            <button onClick={checkoutHandler} className="common-btn">
              Buy Now
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CourseDescription;