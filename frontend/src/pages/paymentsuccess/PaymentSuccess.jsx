//correct code
import React from "react";
import './paymentsuccess.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PaymentSuccess=({user})=>{
    const params=useParams();
    console.log("Payment ID:", params.id);
    return (
    <div className="payment-success-page">
           

    <div className="success-message">
        <h2>Payement successful</h2>
        <p>Your course subscription has been activated</p>
        <p> Reference no - {params.id} </p>
            <Link to ={`/`} className="common-btn">Go to Dashboard</Link>
        
        </div>
    </div>
    )
}

export default PaymentSuccess;





// import React, { useEffect } from "react";
// import './paymentsuccess.css';
// import { useParams, useNavigate } from "react-router-dom";

// const PaymentSuccess = ({ user }) => {
//     const params = useParams();
//     const navigate = useNavigate();

//     console.log("Payment ID:", params.id);

//     // ✅ Auto-redirect to Dashboard after 3 seconds
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (user?._id) {
//                 navigate(`/${user._id}/dashboard`);
//             } else {
//                 console.warn("User ID not found, redirecting to home");
//                 navigate("/");
//             }
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, [navigate, user]);

//     return (
//         <div className="payment-success-page">
//             <div className="success-message">
//                 <h2>Payment Successful</h2>
//                 <p>Your course subscription has been activated.</p>
//                 <p>Reference No - {params.id}</p>
//                 {/* ✅ Button dynamically navigates to the correct path */}
//                 <button 
//                     onClick={() => user._id ? navigate(`/${user._id}/dashboard`) : console.warn("User ID not found")}
//                     className="common-btn">
//                     Go to Dashboard
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default PaymentSuccess;
