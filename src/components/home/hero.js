import React from 'react';
import '../../styles/home.css';
import HeroVid from '../../assets/Home/Hero_vid.mp4'

const Hero = () => {
  return (
    <section className="hero">
    <div className="hero-container ">
      {/* <video className='hero__vid' src={HeroVid} autoPlay loop muted /> */}
  
        <h1 className="hero-title">Delmore</h1>
        <p className="hero-text">Quality-Ethics-Sustainability</p>
   
    </div>
  </section>
  )
}

export default Hero