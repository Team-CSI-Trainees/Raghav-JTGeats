import React from "react";
import "./Home.css";
import cook from "./images/cooking.png";

const Home=() =>{
    return(
        <div className="home">
            <div className="home-text">
                <h4>Authentic Home Food In India</h4>
                <p>JTGeats is a courier service in which authentic home food is delivered to a customer.</p>
                <div className="search-btn">
                    <input type="text" className="search-btn-text" placeholder="Search food you love" />
                    <a href="https://www.zomato.com/"><input type="submit" className="search-submit" name="" id="" value="Search" /></a>
                </div>
            </div>
            <img src={cook} className="cook" alt="" />
        </div>
    )

}

export default Home;