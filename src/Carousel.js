import React, { useState } from "react";
import "./Carousel.css";
import btn1 from "./images/play.png";
import Card from "./Card";
import img1 from "./images/menuimg1.png";
import img2 from "./images/menuimg2.png";
import img3 from "./images/menuimg3.png";
import img4 from "./images/menuimg4.png";
import img5 from "./images/menuimg5.png";
import img6 from "./images/menuimg6.png";
import { Link } from "react-router-dom";

const Carousel =() =>{
    const [i,seti]=useState(0);
    const [j,setj]=useState(1);
    const [k,setk]=useState(2);
    const Slidedata =[
      {
        imgsrc:img1,
        name:"Home Made Pizza",
        price:"Rs.470",
      },
      {
          imgsrc:img2,
          name:"Delicious Pizza",
          price:"Rs.190",
      },
      {
          imgsrc:img3,
          name:"Tandoori Chicken",
        price:"Rs.666",
        },
        {
          imgsrc:img4,
          name:"Large Pizza",
        price:"Rs.416",
        },
        {
          imgsrc:img5,
          name:"Extra Cheese Pizza",
          price:"Rs.66",
        },
        {
          imgsrc:img6,
          name:"Home Cook Pizza",
          price:"Rs.290",
        },
    ]

    const prev=() =>{
      if(i==0)
      seti(Slidedata.length-1);
      else
      seti(i-1);

      if(j==0)
      setj(Slidedata.length-1);
      else
      setj(j-1);

      if(k==0)
      setk(Slidedata.length-1);
      else
      setk(k-1);
    };
    const next=() =>{
      if(i==Slidedata.length-1)
      seti(0);
      else
      seti(i+1);

      if(j==Slidedata.length-1)
      setj(0);
      else
      setj(j+1);

      if(k==Slidedata.length-1)
      setk(0);
      else
      setk(k+1);
  }

  const [request,setrequest]=useState(false);
    
    return(
        <section className="carousel">
            
            <h3>Popular Items</h3>

            <div className="slider">
            <div className="btn1" onClick={prev}>
                <img src={btn1} alt="" />
            </div>
            
              <div className="slider1" >
              <Card imgsrc={Slidedata[i].imgsrc} title={Slidedata[i].name} price={Slidedata[i].price}>    
              </Card>
              </div>

              <div className="slider2">
                <Card imgsrc={Slidedata[j].imgsrc}
                 title={Slidedata[j].name}
                 price={Slidedata[j].price}>  
              </Card>
              </div>

              <div className="slider3">
              <Card imgsrc={Slidedata[k].imgsrc }
              title={Slidedata[k].name}
               price={Slidedata[k].price}>  
              </Card>
              </div>

              <div className="btn2" onClick={next}>
                <img src={btn1} alt="" />
            </div>
            </div>

            <button className="request-dish" onClick={() =>{setrequest(true)}}>Request a Dish</button>


            <div className={request?"request-popup":"close"}>
                <div className="dish-request-menu">
                   <h2>Request a Dish</h2>
                   <div className="input-field">
                   <label>Name*</label>
                   <input type="text" placeholder="   Enter name of the dish"/>
                   </div>
                   <div className="input-field">
                   <label htmlFor="">Upload an image</label>
                   <input type="text" placeholder="   Paste a URL"/>
                   </div>
                   <div className="request-controls">
                     <Link to="/home" id={request?"cancel":"close"} onClick={()=>setrequest(false)}>Cancel</Link>
                     <Link to="/home" id={request?"submit":"close"} onClick={()=>setrequest(false)}>Submit Request</Link>
                   </div>
                </div>
             </div>
            
        </section>


    )
}

export default Carousel;