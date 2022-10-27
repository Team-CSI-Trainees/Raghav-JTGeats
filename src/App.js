import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import "./App.css";
import Menu from "./Menu";
import Video from "./Video";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Footer from "./Footer";

const App =() =>{
    return (
        <div>
            <Navbar/>
            <Home/>
            <Menu/>
            <Carousel/>
            <Video/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default App;