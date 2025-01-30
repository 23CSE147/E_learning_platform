// import React, { useEffect, useState } from "react";
// import './lecture.css';
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../main";
// const Lecture = ({ user }) => {

//     const [Lectures, setLectures] = useState([])
//     const [Lecture, setLecture] = useState([])
//     // const[lecLoading,setLecLoading]=useState()

//     const params = useParams()

//     async function fetchLectures() {
//         try {
//             const { data } = await axios .get(`${server}/api/lectures/${params.id}`,{
//                 headers:{
//                     token:localStorage.getItem("token"),
//                 },
//         });
//         setLectures(data.lectures)
//         } catch (error) {
//             console.log(error);


//         }
//     }

//     useEffect(()=>{
//         fetchLectures()
//     },[])
//     return <div>Lectures</div>;


// }

// export default Lecture;



// import React, { useEffect, useState } from "react";
// import './lecture.css';
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../main";

// const Lecture = ({ user }) => {
//     const [lectures, setLectures] = useState([]);
//     const [Lecture, setLecture] = useState([]);
//     const [show, setShow] = useState(false);
//     const params = useParams();

//     async function fetchLectures() {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             console.error("No token found. User is not authenticated.");
//             return;
//         }

//         try {
//             const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // ✅ Use proper Authorization format
//                 },
//             });
//             setLectures(data.lectures);
//         } catch (error) {
//             console.error("Error fetching lectures:", error.response?.data || error.message);
//         }
//     }
//     async function fetchLecture(id) {
//         try {
//             const { data } = await axios.get(`${server}/api/lecture/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`, // ✅ Use proper Authorization format
//                 },
//             });
//             setLecture(data.lecture);

//         } catch (error) {
//             console.log(error);

//         }
//     }
//     useEffect(() => {
//         fetchLectures();
//     }, [params.id]);

//     return (
//         <div className="lecture-page">
//             {/* Left Side - Video Player */}
//             <div className="left">
//                 {lecture.video ? (
//                     <>
//                         <video
//                             src={`${server}/${lecture.video}`}
//                             width={"100%"}
//                             controls
//                             controlsList="nodownload noremoteplayback"
//                             disablePictureInPicture
//                             disableRemotePlayback
//                             autoPlay
//                         ></video>
//                         <h1>{lecture.title}</h1>
//                         <h3>{lecture.description}</h3>
//                     </>
//                 ) : (
//                     <h1>Please Select a Lecture</h1>
//                 )}
//             </div>

//             {/* Right Side - Lecture List & Form */}
//             <div className="right">
//                 {user && user.role === "admin" && (
//                     <button className="common-btn" onClick={() => setShow(!show)}>
//                         Add Lecture +
//                     </button>
//                 )}

//                 {/* Add Lecture Form */}
//                 {show && (
//                     <div className="lecture-form">
//                         <h2>Add Lecture</h2>
//                         <form>
//                             <label htmlFor="title">Title</label>
//                             <input type="text" id="title" required />

//                             <label htmlFor="description">Description</label>
//                             <input type="text" id="description" required />

//                             <label htmlFor="video">Upload Video</label>
//                             <input type="file" id="video" required />

//                             <button type="submit" className="common-btn">
//                                 Add
//                             </button>
//                         </form>
//                     </div>
//                 )}

//                 {/* Lecture List
//                 {lectures && lectures.length > 0 ? (

//                         {lectures.map((lec) => (
//                             <li key={lec._id} onClick={() => fetchLecture(lec._id)}>
//                                 {lec.title}
//                             </li>
//                         ))}

//                 ) : (
//                     <p>No lectures available.</p>
//                 )} */}
//                 {
//                     lectures && lectures.length > 0 ? lectures.map((e, i) => (
//                         <>
//                             <div onClick={() => fetchLecture(e._id)} key={i} className="lecture-number">
//                                 {i + 1}.{e.title}
//                             </div>
//                         </>
//                     )) : <p>No Lectures Yet!</p>
//                 }
//             </div>
//         </div>
//     );
// };

// export default Lecture;




// import React, { useEffect, useState } from "react";
// import './lecture.css';
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../main";

// const Lecture = ({ user }) => {
//     const [lectures, setLectures] = useState([]);
//     const [lecture, setLecture] = useState([]); // ✅ Fixed capitalization
//     const [show, setShow] = useState(false);
//     const params = useParams();

//     async function fetchLectures() {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             console.error("No token found. User is not authenticated.");
//             return;
//         }

//         try {
//             const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setLectures(data.lectures);
//         } catch (error) {
//             console.error("Error fetching lectures:", error.response?.data || error.message);
//         }
//     }

//     async function fetchLecture(id) {
//         const token = localStorage.getItem("token"); // ✅ Defined token inside function

//         if (!token) {
//             console.error("No token found. User is not authenticated.");
//             return;
//         }

//         try {
//             const { data } = await axios.get(`${server}/api/lecture/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setLecture(data.lecture);
//         } catch (error) {
//             console.error("Error fetching lecture:", error.response?.data || error.message);
//         }
//     }

//     useEffect(() => {
//         fetchLectures();
//     }, [params.id]);

//     return (
//         <div className="lecture-page">
//             {/* Left Side - Video Player */}
//             <div className="left">
//                 {lecture.video ? (
//                     <>
//                         <video
//                             src={`${server}/${lecture.video}`}
//                             width={"100%"}
//                             controls
//                             controlsList="nodownload noremoteplayback"
//                             disablePictureInPicture
//                             disableRemotePlayback
//                             autoPlay
//                         ></video>
//                         <h1>{lecture.title}</h1>
//                         <h3>{lecture.description}</h3>
//                     </>
//                 ) : (
//                     <h1>Please Select a Lecture</h1>
//                 )}
//             </div>

//             {/* Right Side - Lecture List & Form */}
//             <div className="right">
//                 {user && user.role === "admin" && (
//                     <button className="common-btn" onClick={() => setShow(!show)}>
//                         Add Lecture +
//                     </button>
//                 )}

//                 {/* Add Lecture Form */}
//                 {show && (
//                     <div className="lecture-form">
//                         <h2>Add Lecture</h2>
//                         <form>
//                             <label htmlFor="title">Title</label>
//                             <input type="text" id="title" required />

//                             <label htmlFor="description">Description</label>
//                             <input type="text" id="description" required />

//                             <label htmlFor="video">Upload Video</label>
//                             <input type="file" id="video" required />

//                             <button type="submit" className="common-btn">
//                                 Add
//                             </button>
//                         </form>
//                     </div>
//                 )}

//                 {/* Lecture List */}
//                 {lectures.length > 0 ? (
//                     lectures.map((e, i) => (
//                         <>
//                         <div
//                              // ✅ Use unique key
//                             onClick={() => fetchLecture(e._id) key={i}}
//                             className="lecture-number"
//                         >
//                             {i + 1}. {e.title}
//                         </div>
//                         </>
//                     ))
//                 ) : (
//                     <p>No Lectures Yet!</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Lecture;

//correct code
import React, { useEffect, useState } from "react";
import './lecture.css';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import toast from "react-hot-toast";

const Lecture = ({ user }) => {
    const [lectures, setLectures] = useState([]);
    const [lecture, setLecture] = useState({}); // ✅ Changed [] to {} to store an object
    const [show, setShow] = useState(false);
    const params = useParams();
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [video, setvideo] = useState("")
    const [videoPrev, setVideoPrev] = useState("")
    //correct code
    // if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    //     return navigate("/");
    useEffect(() => {
        if (user && user.role !== "admin" && !user.subscription.includes(params.id)) {
            navigate("/");
        }
    }, [user, params.id]);


    async function fetchLectures() {
        const token = localStorage.getItem("token");

        if (!token) {
            console.error("No token found. User is not authenticated.");
            return;
        }

        try {
            const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }

            });
            setLectures(data.lectures);
        } catch (error) {
            console.error("Error fetching lectures:", error.response?.data || error.message);
        }
    }

    async function fetchLecture(id) {
        const token = localStorage.getItem("token"); // ✅ Defined token inside function

        if (!token) {
            console.error("No token found. User is not authenticated.");
            return;
        }

        try {
            const { data } = await axios.get(`${server}/api/lecture/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setLecture(data.lecture);
        } catch (error) {
            console.error("Error fetching lecture:", error.response?.data || error.message);
        }
    }

    const changeVideoHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader()

        reader.readAsDataURL(file)

        reader.onloadend = () => {
            setVideoPrev(reader.result)
            setvideo(file);
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("No token found. Please log in again.");
            return;
        }
        const myForm = new FormData()

        myForm.append("title", title)
        myForm.append("description", description)
        myForm.append("file", video);

        try {
            const { data } = await axios.post(`${server}/api/course/${params.id}`, myForm, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    //token:localStorage.getItem("token"),
                }
            })
            toast.success(data.message);
            setShow(false);
            fetchLectures();
            setTitle("");
            setDescription("");
            setvideo("")
            setVideoPrev("")

        } catch (error) {
            toast.error(error.response.data.message)
        }
    };

    const deleteHandler=async(id)=>{
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("No token found. Please log in again.");
            return;
        }
        if(confirm("Are You sure you want to delete this lecture")){
            try {
                const {data}=await axios.delete(`${server}/api/lecture/${id}`,{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                        //token:localStorage.getItem("token"),
                    }
                })
                toast.success(data.message);
                fetchLectures();
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
    }
    useEffect(() => {
        fetchLectures();
    }, [params.id]);
    // useEffect(() => {
    //     fetchLectures();
    // }, []);

    return (
        <div className="lecture-page">
            {/* Left Side - Video Player */}
            <div className="left">
                {lecture.video ? (
                    <>
                        <video
                            src={`${server}/${lecture.video}`}
                            width={"100%"}
                            controls
                            controlsList="nodownload noremoteplayback"
                            disablePictureInPicture
                            disableRemotePlayback
                            autoPlay
                        ></video>
                        <h1>{lecture.title}</h1>
                        <h3>{lecture.description}</h3>
                    </>
                ) : (
                    <h1>Please Select a Lecture</h1>
                )}
            </div>

            {/* Right Side - Lecture List & Form */}
            <div className="right">
                {user && user.role === "admin" && (
                    <button className="common-btn" onClick={() => setShow(!show)}>
                        {show ? "Close" : "Add Lecture +"}
                    </button>
                )}

                {/* Add Lecture Form */}
                {show && (
                    <div className="lecture-form">
                        <h2>Add Lecture</h2>
                        <form onSubmit={submitHandler} >
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} required />

                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" value={description} onChange={e => setDescription(e.target.value)} required />

                            <label htmlFor="video">Upload Video</label>
                            <input type="file" placeholder="Choose Video" onChange={changeVideoHandler} required />

                            {
                                videoPrev && <video src={videoPrev} alt="" width={300} controls></video>
                            }

                            <button type="submit" className="common-btn">
                                Add
                            </button>
                        </form>
                    </div>
                )}

                {/* Lecture List */}
                {lectures.length > 0 ? (
                    lectures.map((e, i) => (
                        <>
                            <div
                                onClick={() => fetchLecture(e._id)}
                                key={i}
                                className={`lecture-number ${lecture._id === e._id && "active"}`}
                            >
                                {i + 1}. {e.title}
                            </div>

                            {/* {
                                user && user.role === "admin" && <button className="common-btn"
                                    style={{ background: "red" }}>Delete {e.title}</button>
                            } */}
                            {user && user.role === "admin" && (
                                <button className="common-btn" style={{ background: "red" }} onClick={() => deleteHandler(e._id)}>

                                    Delete {e.title}
                                </button>
                            )}

                        </>
                    ))
                ) : (
                    <p>No Lectures Yet!</p>
                )}

            </div>
        </div>
    )
};

export default Lecture;
