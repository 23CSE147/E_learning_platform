// import React from "react";
// import './auth.css';
// import { Link } from "react-router-dom";
// const Register=()=>{
//     return(
//         <div className="auth-page">
//         <div className="auth-form">
//             <h2>Register</h2>
//             <form>
//             <label htmlFor="name">Name</label>
//             <input type="text" required />

//                 <label htmlFor="email">Email</label>
//                 <input type="email" required />


//                 <label htmlFor="password">Password</label>
//                 <input type="password" required />
//                 <button className="common-btn">Register</button>
//             </form>
//             <p>
//                 Have an Account? <Link to='/login'>Login</Link>
//             </p>
//         </div>
//     </div>
//     )
// }

// export default Register;



import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext"; 
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../../main"; 
const Register = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuth } = UserData(); 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/register`, { name, email, password });

      toast.success(data.message);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setUser(data.user);
      setIsAuth(true);

      navigate("/login"); 
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button disabled={btnLoading} type="submit" className="common-btn">
            {btnLoading ? "Please Wait..." : "Register"}
          </button>
        </form>
        <p>
          Have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
