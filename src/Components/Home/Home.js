import React from 'react'
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import pic1 from "../images/WhatsAppImage2.jpg"
import pic2 from "../images/WhatsApp-Image.jpg"
import pic3 from "../images/WhatsApp-Image10.jpg"

const Home = () => {
  return (
    <div>
        <Carousel
          showIndicators={false}
          showThumbs={false}
          className="home__image"
          autoPlay
          interval={3500}
          infiniteLoop={true}
        //   animation={{effect:"Fade"}}
          // showPlayButton={true}
        >
          <div>
            <img
              src={pic1}
              // alt=""
            />
          </div>
          <div>
            <img
              src={pic2}
              // alt=""
            />
          </div>
          <div>
            <img
              src={pic3}
              // alt=""
            />
          </div>
        </Carousel>
    </div>
  )
}

export default Home