import React from "react";
import "./Footer.css";
import insta from "./images/insta.png";
import facebook from "./images/facebook.png";
import JTGeats from "./images/JTGeats.png";

const Footer =()=>{
    return(
        <div className="footer-area">
        <div className="footer">
            <img src={JTGeats} alt="" />
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
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