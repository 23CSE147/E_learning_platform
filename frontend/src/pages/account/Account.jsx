// // import React, { useEffect, useState, useContext } from "react";
// // import "./account.css";
// // import { MdDashboard } from "react-icons/md";
// // import { AiOutlineLogout } from "react-icons/ai";
// // import { UserData } from "../../context/UserContext"; // Ensure correct import
// // import toast from "react-hot-toast";

// // const Account = ({ user }) => {
// //     const { setIsAuth, setUser } = useContext(UserData) || {}; // ✅ Prevent destructuring error

// //     const [storedUser, setStoredUser] = useState(null);

// //     const logoutHandler = () => {
// //         localStorage.removeItem("user");
// //         setUser && setUser(null); // ✅ Prevent calling undefined function
// //         setIsAuth && setIsAuth(false);
// //         setStoredUser(null);
// //         toast.success("Logged Out");
// //     };

// //     useEffect(() => {
// //         const savedUser = localStorage.getItem("user");
// //         if (savedUser) {
// //             setStoredUser(JSON.parse(savedUser));
// //         }
// //     }, []);

// //     useEffect(() => {
// //         if (user) {
// //             localStorage.setItem("user", JSON.stringify(user));
// //             setStoredUser(user);
// //         }
// //     }, [user]);

// //     return (
// //         <div>
// //             {storedUser && (
// //                 <div className="profile">
// //                     <h2>My Profile</h2>
// //                     <div className="profile-info">
// //                         <p><strong>Name - {storedUser.name}</strong></p>
// //                         <p><strong>Email - {storedUser.email}</strong></p>
// //                         <button className="common-btn">
// //                             <MdDashboard /> Dashboard
// //                         </button>
// //                         <br />
// //                         <button
// //                             className="common-btn"
// //                             style={{ background: "red" }}
// //                             onClick={logoutHandler}
// //                         >
// //                             <AiOutlineLogout /> Logout
// //                         </button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Account;




// // import React, { useEffect, useState, useContext } from "react";
// // import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate for redirection
// // import "./account.css";
// // import { MdDashboard } from "react-icons/md";
// // import { AiOutlineLogout } from "react-icons/ai";
// // import { UserData } from "../../context/UserContext"; 
// // import toast from "react-hot-toast";

// // const Account = ({ user }) => {
// //     const navigate = useNavigate(); // ✅ Initialize useNavigate
// //     const { setIsAuth, setUser } = useContext(UserData) || {}; 

// //     const [storedUser, setStoredUser] = useState(null);

// //     // 🔹 Logout handler that clears user data and redirects to login
// //     const logoutHandler = () => {
// //         localStorage.removeItem("user");
// //         setUser && setUser(null); 
// //         setIsAuth && setIsAuth(false);
// //         setStoredUser(null);
// //         toast.success("Logged Out");

// //         navigate("/login"); // ✅ Redirect to Login Page after logout
// //     };

// //     useEffect(() => {
// //         const savedUser = localStorage.getItem("user");
// //         if (savedUser) {
// //             setStoredUser(JSON.parse(savedUser));
// //         }
// //     }, []);

// //     useEffect(() => {
// //         if (user) {
// //             localStorage.setItem("user", JSON.stringify(user));
// //             setStoredUser(user);
// //         }
// //     }, [user]);

// //     return (
// //         <div>
// //             {storedUser ? (
// //                 <div className="profile">
// //                     <h2>My Profile</h2>
// //                     <div className="profile-info">
// //                         <p><strong>Name - {storedUser.name}</strong></p>
// //                         <p><strong>Email - {storedUser.email}</strong></p>
// //                         <button className="common-btn">
// //                             <MdDashboard /> Dashboard
// //                         </button>
// //                         <br />
// //                         <button
// //                             className="common-btn"
// //                             style={{ background: "red" }}
// //                             onClick={logoutHandler} // ✅ Call logout handler
// //                         >
// //                             <AiOutlineLogout /> Logout
// //                         </button>
// //                     </div>
// //                 </div>
// //             ) : (
// //                 navigate("/login") // ✅ Auto-redirect if no user is logged in
// //             )}
// //         </div>
// //     );
// // };

// // export default Account;



// import React from "react";
// import './account.css'
// import { MdDashboard } from "react-icons/md";
// // import { IoIosLogOut } from "react-icons/io";
// import { AiOutlineLogout } from "react-icons/ai";
// const Account = ({user}) => {
//     console.log("User Data:", user);
//     localStorage.setItem('user',user);
//     if(!user){
//         localStorage.getItem("user")
//     }
//     return (
//         <div>
//            {user && (
//              <div className="profile">
//              <h2>My Profile</h2>
//              <div className="profile-info">
//                  <p>
//                      <strong>
//                          Name - {user.name}
//                      </strong>
//                  </p>
//                  <p>
//                      <strong>
//                          Email - {user.email}
//                      </strong>
//                  </p>
//                  <button className="common-btn"><MdDashboard />Dashboard</button>
//                     <br />
//                  <button className="common-btn" style={{ background: "red" }}><AiOutlineLogout />
//                  Logout</button>
//              </div>
//          </div>
//            )}
        
//         </div>
//     )
// }

// export default Account;







// import React from "react";
// import './account.css';
// import { MdDashboard } from "react-icons/md";
// import { AiOutlineLogout } from "react-icons/ai";
// import {useNavigate} from 'react-router-dom'
// const Account = ({ user }) => {
//     const navigate=useNavigate()
//   console.log("User Data:", user);
//  const handlelogout=()=>{
//     localStorage.removeItem("user")
//     localStorage.removeItem("token")
//     navigate("/login")

//  }
//   // Save user to localStorage if user object exists
//   if (user) {
//     // Ensure user is stored as a JSON string
//     localStorage.setItem('user', JSON.stringify(user));
//   }

//   return (
//     <div>
//       {user && (
//         <div className="profile">
//           <h2>My Profile</h2>
//           <div className="profile-info">
//             <p><strong>Name - {user.name}</strong></p>
//             <p><strong>Email - {user.email}</strong></p>
//             <button className="common-btn"><MdDashboard /> Dashboard</button>
//             <br />
//             <button className="common-btn" style={{ background: "red" }} onClick={handlelogout}><AiOutlineLogout /> Logout</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Account;





// import React from "react";
// import './account.css';
// import { MdDashboard } from "react-icons/md";
// import { AiOutlineLogout } from "react-icons/ai";
// import { useNavigate } from 'react-router-dom';
// import { UserData } from "../../context/UserContext"; // Import UserData to access the context
// import toast from "react-hot-toast";

// const Account = ({ user }) => {
//   const { setUser, setIsAuth } = UserData(); // Access setUser and setIsAuth from the context
//   const navigate = useNavigate();

//   console.log("User Data:", user);

//   const handleLogout = () => {
//     // Clear user data from localStorage and context
//     localStorage.removeItem("user");
//     localStorage.removeItem("token");
//     setUser(null); // Clear user state in context
//     setIsAuth(false); // Set authentication status to false
//     toast.success("Logged Out");
//     // Navigate to the login page
//     navigate("/login");
//   };

//   return (
//     <div>
//       {user && (
//         <div className="profile">
//           <h2>My Profile</h2>
//           <div className="profile-info">
//             <p><strong>Name - {user.name}</strong></p>
//             <p><strong>Email - {user.email}</strong></p>
//             <button className="common-btn"><MdDashboard /> Dashboard</button>
//             <br />
//             <button className="common-btn" style={{ background: "red" }} onClick={handleLogout}>
//               <AiOutlineLogout /> Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Account;


//correct code

import React, { useEffect, useState, useContext } from "react";
import './account.css';
import { MdDashboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { UserData } from "../../context/UserContext"; // Import UserData to access the context
import toast from "react-hot-toast";

const Account = ({ user }) => {
  const { setUser, setIsAuth } = useContext(UserData) || {}; // ✅ Prevent error if context is undefined
  const navigate = useNavigate();
  
  // ✅ Store user in local state
  const [storedUser, setStoredUser] = useState(null);

  // ✅ Fetch user from localStorage when the component mounts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setStoredUser(JSON.parse(savedUser));
    }
  }, []);

  // ✅ Update localStorage when user changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setStoredUser(user);
    }
  }, [user]);

  console.log("User Data:", storedUser);

  const handleLogout = () => {
    // Clear user data from localStorage and context
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser && setUser(null); // Prevent calling undefined function
    setIsAuth && setIsAuth(false);
    setStoredUser(null);
    toast.success("Logged Out");

    // Navigate to the login page
    navigate("/login");
  };

  return (
    <div>
      {storedUser ? ( // ✅ Check storedUser instead of user
        <div className="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
            <p><strong>Name - {storedUser.name}</strong></p>
            <p><strong>Email - {storedUser.email}</strong></p>
            <button onClick={()=>navigate(`/`)} className="common-btn"><MdDashboard /> Dashboard</button>
            <br />
            <button className="common-btn" style={{ background: "red" }} onClick={handleLogout}>
              <AiOutlineLogout /> Logout
            </button>
          </div>
        </div>
      ) : (
        navigate("/login") // ✅ Redirect if no user is found
      )}
    </div>
  );
};

export default Account;
