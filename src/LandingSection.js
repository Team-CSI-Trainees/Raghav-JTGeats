import React from "react";
// import "./Landingsection.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Video from "./Video";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Footer from "./Footer";


const Landingsection=()=>{
    return(
        <div>
            {/* <Navbar/> */}
            <Home/>
            <Menu/>
            <Carousel/>
            <Video/>
            <Contact/>
            {/* <Footer/> */}
            </div>
    )
}

export default Landingsection;