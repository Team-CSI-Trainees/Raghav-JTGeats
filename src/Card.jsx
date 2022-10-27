import React, { useState } from "react";
import "./Card.css";
import star from "./images/star.png";
import add from "./images/addtocart.png";
import addbtn from "./images/addbtn.png";
import subbtn from "./images/subtocart.png";

const Card =(props) =>{

    const [q,setq]=useState(1);
    const [openquantity,setopenquantity]=useState(false);

    const increase=()=>{
        setq(q+1);
    }
    const decrease=()=>{
        if(q==1)
        setopenquantity(false);
        setq(q-1);
    }

    return (
        <div className="card">
            <div className="card-img">
                <img src={props.imgsrc} alt="" />
            </div>


            <div className="card-text">
                <div className="card-inside">
                    <span id="title">{props.title}</span>
                    <span id="price">{props.price}</span>
                    <div className="ratings">
                        <div className="card-ratings">
                            <img src={star} alt="" />
                            <span>4.7</span>
                        </div>
                        <div className="card-timing">
                            <span>50-79 min</span>
                        </div>
                    </div>
                    <img className={openquantity?"hide-btn":""} id="card-add"src={add} onClick={()=>setopenquantity(true) & setq(1)} alt="" />

                    <div className={openquantity ? "quantity" : "hide-btn" }>
                        <img src={subbtn} onClick={decrease} alt="" />
                        <p className="quantity-no">{q}</p>
                        <img src={addbtn} onClick={increase} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card;