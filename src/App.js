import React from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
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
           
       
        <BrowserRouter>
            <Routes>
               <Route path="/Raghav-JTGeats" element={<Landingsection/>}/>
               <Route path="/Raghav-JTGeats/about" element={<Carousel/>}/>
               <Route path="/Raghav-JTGeats/menu" element={<Menu/>}/>
               <Route path="/Raghav-JTGeats/blog" element={<Video/>}/>
               <Route path="/Raghav-JTGeats/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>

        <Footer/>
        </div>
    )
};

export default App;