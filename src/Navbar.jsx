import React, { useState } from "react";
import "./Navbar.css";
import search from "./images/search.png";
import cart from "./images/cart.png";
import logo from "./images/JTGeats.png";
import menu from "./images/menu.png";
import close from "./images/close.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [OpenMenu,setOpenMenu]=useState(false);
    return (
     
       <div className="navbar">
          <a href="" className="navbar-logo"><img src={logo} alt="" /></a>
          <div className={OpenMenu ?"navbar-list view actives" :"navbar-list"}>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Menu</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          </div>
          <div className="navbar-card">
            <a href="" className="navbar-btns"><img src={search} alt="" /></a>
            <a href="" className="navbar-btns"><img src={cart} alt="" /></a>
          </div>
          <FontAwesomeIcon  icon={faBars} className="menu-btn" onClick={() => setOpenMenu(true)}/>
          <FontAwesomeIcon  icon={faXmark}  className={OpenMenu ?"cross-btn view" :"cross-btn"} onClick={() => setOpenMenu(false)}/>

         
       </div>
    )
};

export default Navbar;