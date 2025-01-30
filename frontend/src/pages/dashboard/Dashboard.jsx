import React from 'react';
import './dashboard.css';
import { CourseData } from '../../context/CourseContext';
const Dashboard=()=>{
    const {mycourse} =CourseData()
    console.log("wwwwwwwwwwwwwww",mycourse)
    return <div>Dashboard</div>
};

export default Dashboard;
