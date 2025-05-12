// import React from "react";
// import './about.css'
// const About = () => {
//     return (
//         <div className="about">
//             <div className="about-content">
//                 <h2>
//                     About Us
//                 </h2>
//                 <p>
//                     We are dedicated to providing high-quality online courses to help individuals learn and grow in their desired fields. Our experienced instructors ensure that each course is tailored for effective learning and practical application.
//                 </p>
//             </div>
//             <div className="about-images">
//                 <img src="https://source.unsplash.com/400x300/?online-learning" alt="Online Learning" />
//                 <img src="https://source.unsplash.com/400x300/?education,students" alt="Students Learning" />
//                 <img src="https://source.unsplash.com/400x300/?elearning" alt="E-Learning Concept" />
//             </div>

//             {/* <div className="contact-section">
//                 <h2>Contact Us</h2>
//                 <div className="contact-card">
//                     <p><span role="img" aria-label="email">📧</span> Email: <a href="mailto:support@elearnplatform.com">support@elearnplatform.com</a></p>
//                     <p><span role="img" aria-label="phone">📞</span> Phone: +1 (123) 456-7890</p>
//                     <p><span role="img" aria-label="location">📍</span> Address: 123 Learning St, Knowledge City, EduWorld</p>
//                 </div>
//             </div> */}
//         </div>
//     )
// }

// export default About;









import React from "react";
import './about.css';

const About = () => {
    return (
        <div className="about">
            {/* Hero Section */}
            <div className="about-hero">
                <img src="https://i.pinimg.com/736x/a1/a9/e7/a1a9e7e82579fefb1084d8a129e394ff.jpg" alt="E-learning" />
                <div className="hero-overlay">
                    <h1>Empowering Education Through Innovation</h1>
                </div>
            </div>

            {/* About Text Section */}
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    At Learnico, we are committed to transforming the way people learn. 
                    Our platform offers high-quality, accessible, and flexible online courses 
                    to help learners thrive in the modern world. With experienced instructors 
                    and real-world projects, we aim to bridge the gap between knowledge and success.
                </p>
            </div>

            {/* Image Gallery */}
            <div className="about-images">
                <img src="https://i.pinimg.com/736x/35/5e/ea/355eea6483947c8ee1444db7e867da85.jpg" alt="Learning 1" />
                <img src="https://i.pinimg.com/736x/1c/f2/1e/1cf21e2dd3a9fece42bfe54c065c5ddb.jpg" alt="Learning 2" />
                <img src="https://i.pinimg.com/736x/af/36/18/af3618539c75160eaab60b2f431bc274.jpg" alt="Learning 3" />
            </div>

            {/* Contact Section */}
            <div className="contact-section">
                <h2>Contact Us</h2>
                <div className="contact-card">
                    <p>📧 Email: <a href="mailto:support@learnico.com">support@learnico.com</a></p>
                    <p>📞 Phone: +1 (123) 456-7890</p>
                    <p>📍 Address: 123 Learning Lane, Knowledge City, EduWorld</p>
                </div>
            </div>
        </div>
    );
};

export default About;
