import React from "react";
import "./Mycart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Mycart =(props)=>{
    return(
       <div className="cartbox">
         <div className="item">
          <p>{props.itemname}</p>
         </div>

          <div className="item">
           <p>{props.itemquantity}</p>
          </div>

          <div className="item">
            <p>{props.itemprice}</p>
          </div>
          
          <div className="remove">
          <FontAwesomeIcon icon={faXmark}/>
          </div>
       </div>
    )
}

export default Mycart;