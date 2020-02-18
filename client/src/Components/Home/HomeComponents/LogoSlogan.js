import React from 'react'
import ImageGallery from "react-image-gallery";
import BeautyStars from "beauty-stars";
import logo from "../../../images/logo.png";


const images = [
    {
      original: logo
    }
  ];
  

export default function LogoSlogan() {
   
    return (
        
        <div className="Slider">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showNav={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showBullets={false}
            autoPlay={true}
            slideDuration={1100}
            slideInterval={5000}
          />
          <BeautyStars value={5} size="70px" id="stars5"/>
          <div className="button">
            <button className="Download-button">Download</button>
          </div>
        </div>
    )
}
