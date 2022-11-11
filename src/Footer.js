import React from "react";
import "./Footer.css";
import insta from "./images/insta.png";
import facebook from "./images/facebook.png";
import JTGeats from "./images/JTGeats.png";
import { NavLink } from "react-router-dom";
const Footer =()=>{
    return(
        <div className="footer-area">
        <div className="footer">
            <img src={JTGeats} alt="" />
            <ul>
            <li><NavLink to="/Raghav-JTGeats">Home</NavLink></li> 
            <li><NavLink to="/Raghav-JTGeats/about">About</NavLink></li>
            <li><NavLink to="/Raghav-JTGeats/menu">Menu</NavLink></li>
            <li><NavLink to="/Raghav-JTGeats/blog">Blog</NavLink></li>
            <li><NavLink to="/Raghav-JTGeats/contact">Contact</NavLink></li>
            </ul>
            <div className="social-media">
            <a href=""><div><img src={facebook} alt="" /></div></a>
                <a href=""><div><img src={insta} alt="" /></div></a>
                
            </div>
            
        </div>
        <hr />
        </div>
    )
}

export default Footer;