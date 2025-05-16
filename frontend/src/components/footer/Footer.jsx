import React from "react";
import './footer.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>
                    &copy;2025 Your Learnico.All rights reserved.<br />Made with 🤍 <a href="">Saravanan</a>
                </p>
                <div className="social-links">
                    <a href="">
                        <FaFacebookSquare />
                    </a>
                    <a href="">
                        <FaSquareTwitter />
                    </a>
                    <a href="">
                        <AiFillInstagram />
                    </a>

                </div>
            </div>
        </footer>
    )
}

export default Footer;