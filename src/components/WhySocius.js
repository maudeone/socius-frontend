import React from 'react';
import SociusCarousel from './SociusCarousel';

const WhySocius = () => {
  return (
    <div className="why-container">
      <div className="text-container"> 
        <h2>PARTNER WITH AN AGENCY THAT UNDERSTANDS YOUR NEEDS</h2>
        <h1>
          Why Socius Marketing
        </h1>
        <p>
          We’ve seen it a thousand times — a business owner or marketing 
          manager comes to us unsure about whether digital marketing is right 
          for them. If your business has wasted money in the past on 
          ineffective marketing efforts or the agency you worked with just 
          didn’t understand your business, you may feel like there isn’t a 
          digital solution for you and your business.
        </p>  
        <p>
          At Socius, we do things differently. We work with you to collaboratively 
          develop strategies that make sense for your unique market and are 
          designed to reach your business’s goals. Here’s why working with Socius 
          will be better:  
        </p>
      </div>
      <div className="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-content"> 
            <SociusCarousel />
          </div>
        </div>
      </div>   
    </div>
  )
};

export default WhySocius;
