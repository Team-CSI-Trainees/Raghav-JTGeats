import React from "react";
import "./Menu.css";
import Card from "./Card"
import Menudata from "./Menudata";


const Menu =() =>{
    return (
       <section className="menu">
         <div className="menu-title">
           <h3>Home Kitchen</h3>
         </div>
         <div className="menu-opt">
         { Menudata.map((val)=>{
              return (<div className="card-hook">
                <Card imgsrc={val.imgsrc} title={val.name} price={val.price}/>
                </div>)
            }
          )}
         </div>
          
       </section>
    )
};

export default Menu;