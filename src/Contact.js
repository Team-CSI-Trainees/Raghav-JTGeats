import React,{useRef, useState}from "react";
import "./Contact.css";
import foodboy from "./images/foodboy.png";

const Contact =()=>{
    const [name,setname]=useState("");
    const nameref=useRef();
    // const [formvalidate,setformvaliadte]=useState(true);

    const formvalidate=(e)=>{
        e.preventDefault();
        checkname(nameref);
    }

    const checkname=(event)=>{
      if(event.target.value.length<3){
      setname("**Username must be minimum 3 characters")
       }
      else{
      setname("")
      }
    }


    return(
        <section className="contact">
            <div className="contact-area">
                <h2>Do you have a question <br />or want to be seller?</h2>
                <p>Fill this form and our manager will contact you next 48 hours.</p>
            <form action="" className="contact-form" onSubmit={formvalidate}>
                <div className="name">
                    <div><input type="text" name="" id="" placeholder="Your Name" ref={nameref}/>
                    <p>{name}</p>
                    </div>
                    <div><input type="text" name="" id="" placeholder="Your e-mail"/>
                    <p>{}</p>
                    </div>
                </div>
                <textarea cols="30" rows="10" className="message" placeholder="Your Message"></textarea>
                <input type="submit" className="submit" />
            </form>
            </div>

            <div className="contact-img">
                <img src={foodboy} alt="" />
            </div>

        </section>
    )
}

export default Contact;