import React from 'react'
import image from '../../../assets/homescreen_image1.png'
import './Hero.css'
import '@fortawesome/fontawesome-free/css/all.css';

const Hero = () => {
  return (
    <>
        <div className='introContainer'>
            <div className='descriptionContainer'>
                <div className='heading'>Ideas Into Brands</div>
                <p>A curated network where India's brightest minds collaborate to ideate, connect, and launch groundbreaking ventures together</p>
                <button className='learnMore'>Learn More <i className="fa-solid fa-angle-right"></i></button>
            </div>
            <div className='imageContainer bottomDiv'>
                <img src={image} alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero