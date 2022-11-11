import React, { useState } from "react";
import "./Navbar.css";
import search from "./images/search.png";
import cart from "./images/cart.png";
import logo from "./images/JTGeats.png";
import menu from "./images/menu.png";
import close from "./images/close.png";
import emptybag from "./images/emptybag.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from "react-router-dom";
import Mycart from "./Mycart";
import Mycartdata from "./Mycartdata";

const Navbar = () => {
  const [OpenMenu,setOpenMenu]=useState(false);
  const[mycartdisplay,setmycartdisplay]=useState(false);
  const[emptycart,setemptycart]=useState(false);

  const checkcart=()=>{
  if(Mycartdata.length==0)
  setemptycart(true);
  else
  setemptycart(false);
  }
    return (
     
       <div className="navbar">
          <a href="" className="navbar-logo"><img src={logo} alt="" /></a>
          <div className={OpenMenu ?"navbar-list view actives" :"navbar-list"}>
          <ul>
            <li><NavLink to="">Home</NavLink></li> 
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          </div>
          <div className="navbar-card">
            <div className="search-btns"><a href="https://www.zomato.com/"><img src={search} alt="" /></a></div >
            <div className="cart-btns"><img src={cart} alt="" onClick={()=>setmycartdisplay(true) & checkcart()}/></div >
          </div>
          <FontAwesomeIcon  icon={faBars} className="menu-btn" onClick={() => setOpenMenu(true)}/>
          <FontAwesomeIcon  icon={faXmark}  className={OpenMenu ?"cross-btn view" :"cross-btn"} onClick={() => setOpenMenu(false)}/>

          <div className={mycartdisplay?"mycartdisplay":"hide"}>
            <div className="mycartpop-up">

              <div className={emptycart?"empty-cart":"hide"}>
                <img src={emptybag}/>
                <h3>Cart is Empty</h3>
                <p>Add some items to the cart to checkout.</p>
                <Link to="/menu" id="back-menu" onClick={()=>mycartdisplay(false)}>Back to Menu</Link>
              </div>
              <div className={emptycart?"hide":"fullbag"}>
             <div className="item-display">
              
              <div className="item">
                 <p>Item Name</p>
              </div>

              <div className="item">
                <p>Quantity</p>
              </div>

              <div className="item">
                <p>Price</p>
              </div>
          
              <div className="removes">
                <p>Remove</p>
              </div>
              </div> 
              

              
              {Mycartdata.map((val)=>{
                return (<Mycart itemname={val.name} itemquantity={val.quantity} itemprice={val.price}/>)
               })
              }
              <Link to="/menu" id="back-menu" onClick={()=>mycartdisplay(false)}>Back to Menu</Link>
              </div>
            </div>
          </div>

         
       </div>
    )
};

export default Navbar;