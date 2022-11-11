import React from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import Menu from "./Menu";
import Video from "./Video";
import Carousel from "./Carousel";
import Contact from "./Contact";
import Landingsection from "./LandingSection";
import Footer from "./Footer";

const App =() =>{
    return (
        <div>
            <Navbar/>
            {/* <Home/>
            <Menu/>
            <Carousel/>
            <Video/>
            <Contact/> */}
           
       
            <Routes>
               <Route path="" element={<Landingsection/>}/>
               <Route path="/about" element={<Carousel/>}/>
               <Route path="/menu" element={<Menu/>}/>
               <Route path="/blog" element={<Video/>}/>
               <Route path="/contact" element={<Contact/>}/>
            </Routes>


        <Footer/>
        </div>
    )
};

export default App;