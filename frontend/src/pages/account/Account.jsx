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
    } else {
      // ✅ If no user found in localStorage, navigate to login
      navigate("/login");
    }
  }, [navigate]);

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
if (!storedUser) {
    return null; // ✅ Prevent component from rendering until redirect happens
  }
  return (
    <div>
      {storedUser ? ( // ✅ Check storedUser instead of user
        <div className="profile">
          <h2>My Profile</h2>
          <div className="profile-info">
            <p><strong>Name - {storedUser.name}</strong></p>
            <p><strong>Email - {storedUser.email}</strong></p>
            {/* <button onClick={()=>navigate(`/${user._id}/dashboard`)} className="common-btn"><MdDashboard /> Dashboard</button> */}
            {/* <button onClick={() => navigate(`/${user._id}/dashboard`)} className="common-btn"><MdDashboard />Dashboard</button> */}
            <button
              onClick={() => storedUser?._id ? navigate(`/${storedUser._id}/dashboard`) : console.warn("User ID not found")}
              className="user-dashboard-btn">
              <MdDashboard /> Dashboard
            </button>

            <br />
            {
              storedUser.role === "admin" && (
                <button
                onClick={() =>navigate(`/admin/dashboard`)}
                className="admin-dashboard-btn">
                <MdDashboard /> Admin Dashboard
              </button>
            )}
            <br />
            <button className="logout-button" onClick={handleLogout}>
              <AiOutlineLogout /> Logout
            </button>
          </div>
        </div>
      ) 
      : 
      (
        navigate("/login") // ✅ Redirect if no user is found
    )
      }

    </div>
  );
};

export default Account;
