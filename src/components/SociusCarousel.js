import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import StockBoy from '../stock1.jpg';
import StockGirl from '../stock2.jpg';

const SociusCarousel = () => {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={3000}
    showIndicators={false}
    >
      <>
      <div className="myCarousel">
      <p> 
          Socius Marketing has taken our website 
          and Internet marketing to the next level!
      </p>
      <img src={StockBoy} alt='stock photo' />
      <h3>John Doe</h3>   
      </div> 
      </>
      <>
      <div className="myCarousel">
      <p> 
          Socius has transformed our website into a lead generation machine!
      </p>
      <img src={StockGirl} alt='stock photo' />
      <h3>Jane Doe</h3>   
      </div> 
      </>
    </Carousel>
  )
};

export default SociusCarousel;
