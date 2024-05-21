import React from 'react'
import "./footer.css";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Telecon.org is dedicated to providing the best telecommunication resources and information.</p>
            </div>
            <div class="footer-section">
                <h3>SERVICES</h3>
                <ul>
                    <li><a href="#">Customized ERP Development</a></li>
                    <li><a href="#">Microsoft Dynamic Implementation</a></li>
                    <li><a href="#">Website Design and Implementation</a></li>
                    <li><a href="#">Mobile Apps Development</a></li>
                    <li><a href="#">SEO and SEM Services</a></li>
                </ul>
                <h3>PRODUCTS</h3>
                <ul>
                    <li><a href="#">Telenoc Suite</a></li>
                    <li><a href="#">Telenoc ERP</a></li>
                    <li><a href="#">Telenoc VTS</a></li>
                    <li><a href="#">Telenoc CFMS</a></li>
                    <li><a href="#">Telenoc PMS</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>TWITTER FEED</h3>
                <h4><FaTwitter /> @TeleNoc</h4>
                <h4>NEWSLETTER</h4>
                <div class="social-icons">
                    <input type='email' placeholder='Email Address'/>
                    
                </div><br/>
                <button className='btn btn-primary '>Subscribe</button>
            </div>
        </div>
    </footer>
  )
}

export default Footer
