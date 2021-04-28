import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Try from '../Try'
import picture from '../image/green.jpg'
import ShowBLock from '../ShowBLock'




function Home(){
    return(
        <div className="container">
            <div className ='home-hero-container'>
              <HeroSection bgImg = {picture} header = '主标题' subheader = '副标题' />
            </div>
            <ShowBLock/>
            <Try/>
        </div>
    )
}

export default Home;