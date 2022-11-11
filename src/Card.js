import React, { useState } from "react";
import "./Card.css";
import star from "./images/star.png";
import add from "./images/addtocart.png";
import addbtn from "./images/addbtn.png";
import subbtn from "./images/subtocart.png";
import Mycartdata from "./Mycartdata";
const Card =(props) =>{

    const [q,setq]=useState(1);
    const [openquantity,setopenquantity]=useState(false);
    const [additem,setadditem]=useState(Mycartdata);


    const increase=()=>{
        if(q==10)
        setq(10);
        else
        setq(q+1);
        // addtocart();
    }
    
    const decrease=()=>{
        if(q==1)
        setopenquantity(false);
        else
        setq(q-1);
        // addtocart();
    }


    // const addtocart=(newitem)=>{
    //     const updateditem=[newitem,...additem];
    //     setadditem(updateditem);
    //     console.log(additem);
    // }

    const addtocart = ()=>{
        console.log(q);
        setadditem(
            {
                name:props.title,
                quantity:q,
                price:props.price,
            }
        )
        console.log(additem);
        // Mycartdata.push(additem);
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
