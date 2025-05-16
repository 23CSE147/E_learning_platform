import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./home.css"
import Testimonials from '../../components/testimonials/Testimonials';
import { FaChartLine } from 'react-icons/fa';
const Home =()=>{
    const navigate=useNavigate()
    return (
        <div>
            <div className='home'>
                <div className='home-content'>
                <h1>Welcome to our Learnico</h1>
                <p>Learn,Grow,Excel</p>
                <button onClick={()=>{navigate("/courses")}}className='common-btn'>
                Get Started <FaChartLine className="chart-icon"/></button>
            </div>
        </div>
        <Testimonials/>
        </div>
    )
}

export default Home;