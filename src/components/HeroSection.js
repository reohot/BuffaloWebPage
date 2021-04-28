import React from 'react'
import './HeroSection.css'
import '../App.css'



function HeroSection(props) {
    return (
        <div className = 'hero-container' style={{ backgroundImage: `url(${props.bgImg})`}}>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted></video> */}
         
            <h1>{props.header}</h1>

            <h2>{props.subheader}</h2>

        </div>
    )
}

export default HeroSection;