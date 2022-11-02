import React from "react";
import "./Contact.css";
import foodboy from "./images/foodboy.png";

const Contact =()=>{
    return(
        <section className="contact">
            <div className="contact-area">
                <h2>Do you have a question <br />or want to be seller?</h2>
                <p>Fill this form and our manager will contact you next 48 hours.</p>
            <form action="" className="contact-form">
                <div className="name">
                    <input type="text" name="" id="" placeholder="Your Name" />
                    <input type="text" name="" id="" placeholder="Your e-mail"/>
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