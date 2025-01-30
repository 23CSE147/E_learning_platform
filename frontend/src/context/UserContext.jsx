// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// //import { server } from '../config';
// import { server } from '../main';  // Correct the path if needed


// const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [user, setuser] = useState(null);
//   const [isAuth, setIsAuth] = useState(false);
//   const [btnLoading, setBtnLoading] = useState(false);
//   const [loading, setLoading] = useState(true);



//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//         setuser(JSON.parse(savedUser));  // ✅ Use correct setter function
//         setIsAuth(true);
//     }
// }, []);

//   //test 1
//   //   async function loginUser(email, password, navigate) {
//   //     setBtnLoading(true);
//   //     try {
//   //         const { data } = await axios.post(`${server}/login`, { email, password });
//   //         toast.success(data.message);
//   //       ("token", data.token);
//   //       setuser(data.user);
//   //       setIsAuth(true);
//   //       navigate("/");
//   //     } catch (error) {
//   //       setBtnLoading(false);
//   //       setIsAuth(false);
//   //       toast.error(error.response?.data?.message || "An error occurred");
//   //     } finally {
//   //       setBtnLoading(false);
//   //     }
//   //   }


//   async function loginUser(email, password, navigate) {
//     setBtnLoading(true);
//     try {
//       console.log(`${server}login`); // Debug log to check the URL
//       const { data } = await axios.post(`${server}/api/login`, { email, password });

//       toast.success(data.message);
//       console.log("Login Successful. Token:", data.token); 
//       localStorage.setItem("token", data.token);
//       console.log("rrg",data)
//       setuser(data.user);
//       setIsAuth(true);
//       navigate("/");
//     } catch (error) {
//       setBtnLoading(false);
//       setIsAuth(false);
//       console.error(error); // Log the error for debugging
//       toast.error(error.response?.data?.message || "An error occurred");
//     } finally {
//       setBtnLoading(false);
//     }
//   }


//   //test 2
//   // async function fectchUser() {
//   //     try{
//   //         const {data}=await axios.get(`${server}/api/user/me`,{
//   //             headers:{
//   //                 token:localStorage.getItem("token"),
//   //             },
//   //         });
//   //         setIsAuth(true);
//   //         setuser(data.user);
//   //         setLoading(false);
//   //     }catch(error){
//   //         console.log(error)
//   //         setLoading(false);
//   //     }

//   // }



//   //test 3
//   async function fetchUser() {
//       try {
//         const token = localStorage.getItem("token"); // Get token from localStorage
//         if (!token) {
//           throw new Error("No token found"); // Token is missing, throw an error
//         }

//         const { data } = await axios.get(`${server}/api/user/me`, {
//           headers: {
//               token: localStorage.getItem("token"),
//           },
//       });


//         setIsAuth(true);
//         setuser(data.user);
//         setLoading(false);
//       } catch (error) {
//         console.log("Error fetching user data:", error.message);
//         setLoading(false);
//         // Optionally, show a toast or alert for missing token or other issues
//         //toast.error(error.response?.data?.message || error.message);
//       }
//     }


//   // async function fectchUser() {
//   //   try {
//   //     const token = localStorage.getItem("token"); // Get token from localStorage
//   //     if (!token) {
//   //       // If no token exists, stop further execution silently
//   //       setLoading(false);
//   //       return;
//   //     }

//   //     const { data } = await axios.get(`${server}/api/user/me`, {
//   //       headers: {
//   //         Authorization: `Bearer ${token}`, // Use Authorization header
//   //       },
//   //     });

//   //     setIsAuth(true);
//   //     setuser(data.user);
//   //   } catch (error) {
//   //     console.log("Error fetching user data:", error.message);

//   //     if (error.response?.status === 403) {
//   //       // Handle token-related errors silently
//   //       localStorage.removeItem("token"); // Clear invalid/expired token
//   //       setIsAuth(false);
//   //       setuser(null);
//   //     } else {
//   //       // For other errors, show a toast message
//   //       toast.error(error.response?.data?.message || error.message);
//   //     }
//   //   } finally {
//   //     setLoading(false); // Set loading to false whether success or error
//   //   }
//   // }

//   useEffect(() => {
//     fetchUser();
//   }, [])
//   return (
//     <UserContext.Provider 
//     value={{ 
//     user, 
//     setuser, 
//     setIsAuth, 
//     isAuth, 
//     loginUser, 
//     btnLoading, 
//     loading,
//      }}>
//       {children}
//       <Toaster />
//     </UserContext.Provider>
//   );
// };

// export const UserData = () => useContext(UserContext);









// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { server } from '../main';  // Correct the path if needed

// const UserContext = createContext();

// export const UserContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuth, setIsAuth] = useState(false);
//   const [btnLoading, setBtnLoading] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       try {
//         // Safely parse the user data from localStorage
//         const parsedUser = JSON.parse(savedUser);
//         setUser(parsedUser); // Set user if parsed successfully
//         setIsAuth(true);
//       } catch (error) {
//         console.error("Error parsing user data:", error);
//         localStorage.removeItem("user"); // Clear invalid data from localStorage
//       }
//     }
//   }, []);

//   async function loginUser(email, password, navigate) {
//     setBtnLoading(true);
//     try {
//       const { data } = await axios.post(`${server}/api/login`, { email, password });
//       toast.success(data.message);
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data.user)); // Store user as a JSON string
//       setUser(data.user);
//       setIsAuth(true);
//       navigate("/");
//     } catch (error) {
//       setBtnLoading(false);
//       setIsAuth(false);
//       toast.error(error.response?.data?.message || "An error occurred");
//     } finally {
//       setBtnLoading(false);
//     }
//   }

//   async function fetchUser() {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No token found");
//       }

//       const { data } = await axios.get(`${server}/api/user/me`, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       setIsAuth(true);
//       setUser(data.user);
//       setLoading(false);
//     } catch (error) {
//       console.log("Error fetching user data:", error.message);
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{
//         user,
//         setUser,
//         setIsAuth,
//         isAuth,
//         loginUser,
//         btnLoading,
//         loading,
//       }}
//     >
//       {children}
//       <Toaster />
//     </UserContext.Provider>
//   );
// };

// export const UserData = () => useContext(UserContext);










//correct code
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { server } from '../main';  // Correct the path if needed

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        // Safely parse the user data from localStorage
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser); // Set user if parsed successfully
        setIsAuth(true);
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user"); // Clear invalid data from localStorage
      }
    }
  }, []);

  async function loginUser(email, password, navigate,fetchMyCourse) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/login`, { email, password });
      toast.success(data.message);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // Store user as a JSON string
      setUser(data.user);
      setIsAuth(true);
      navigate("/");
      fetchMyCourse();
    } catch (error) {
      setBtnLoading(false);
      setIsAuth(false);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setBtnLoading(false);
    }
  }
  async function registerUser(name,email, password, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/register`, {name, email, password });
      toast.success(data.message);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // Store user as a JSON string
      setUser(data.user);
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      setBtnLoading(false);
      setIsAuth(false);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setBtnLoading(false);
    }
  }

  // async function fetchUser() {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (!token) {
  //       throw new Error("No token found");
  //     }

  //     const { data } = await axios.get(`${server}/api/user/me`, {
  //       headers: {
  //         token: localStorage.getItem("token"),
  //       },
  //     });

  //     setIsAuth(true);
  //     setUser(data.user);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log("Error fetching user data:", error.message);
  //     setLoading(false);
  //   }
  // }


  async function fetchUser() {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
  
      const { data } = await axios.get(`${server}/api/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`, // Use Bearer token
        },
      });
  
      setIsAuth(true);
      setUser(data.user);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching user data:", error.message);
      localStorage.removeItem("token"); // Remove invalid token
      localStorage.removeItem("user");
      setIsAuth(false);
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchUser();
  }, []);
  
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        setIsAuth,
        isAuth,
        loginUser,
        btnLoading,
        loading,
        // registerUser,
        fetchUser,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
