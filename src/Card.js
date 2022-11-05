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
    const [addquantity,setaddquantity]=useState({id:1,
        name:props.title,
        quantity:1,
        price:props.price});


    const increase=()=>{
        if(q==10)
        setq(10);
        else
        setq(q+1);
        console.log(q);
        setaddquantity({id:1,
            name:props.title,
            quantity:q+1,
            price:props.price});
        Mycartdata.push(addquantity);
    }
    const decrease=()=>{
        if(q==1)
        setopenquantity(false);
        setq(q-1);
        // setaddquantity({id:1,
        //     name:props.title,
        //     quantity:q+1,
        //     price:props.price});
        // Mycartdata.push(addquantity);
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
                    <img className={openquantity?"hide-btn":""} id="card-add"src={add} onClick={()=>setopenquantity(true) & increase()} alt="" />

                    <div className={openquantity ? "quantity" : "hide-btn" }>
                        <img src={subbtn} onClick={decrease} alt="" />
                        <p className="quantity-no">{q-1}</p>
                        <img src={addbtn} onClick={increase} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card;
