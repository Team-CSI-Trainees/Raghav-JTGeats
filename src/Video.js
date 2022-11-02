import React, {useRef,useState} from "react";
import "./Video.css";
import video from "./video/foodvideo.mp4";
import play from "./images/play.png";

const Video = () => {
    const videoref=useRef();
    const[btnshow,setbtnshow]=useState(true);

    const playvideo =() =>{
        videoref.current.play();
        setbtnshow(false);
         

    };

    return(
        <section className="video">
            <h3>We are providing best<br/>home cooked food delivery service.</h3>
            <p>Away from home and craving the tasty homemade recipes?<br/>Choose from a selection of our delicious home cooked dishes</p>
            <div className="upper"></div>
            <div className="lower"> </div>
             <div className={btnshow?"play":"hide"} onClick={playvideo}>
               <img src={play} alt="" />
             </div>
            <video src={video} ref={videoref} onEnded={()=>setbtnshow(true)}></video>
        </section>

    )
}

export default Video;