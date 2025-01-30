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