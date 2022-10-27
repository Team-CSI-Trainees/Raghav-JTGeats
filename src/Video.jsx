import React, {useRef} from "react";
import "./Video.css";
import video from "./video/foodvideo.mp4";
import play from "./images/play.png";

const Video = () => {
    // const videoref=useRef();

    // const playvideo =() =>{
    //     return(videoref.current.play()
    //      )

    // };
    // const pausevideo=() =>{
    //     return(
    //         videoref.current.pause()
    //     )
    // };
    return(
        <section className="video">
            <h3>We are providing best<br/>home cooked food delivery service.</h3>
            <p>Away from home and craving the tasty homemade recipes?<br/>Choose from a selection of our delicious home cooked dishes</p>
            <div className="upper"></div>
            <div className="lower"> </div>
             <div className="play" >
               <img src={play} alt="" />
             </div>
            <video src={video}></video>
        </section>

    )
}

export default Video;