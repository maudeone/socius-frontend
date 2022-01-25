import React from 'react';
import Cog from '../sociusCog.JPG';
import Power from '../sociusPower.JPG';
import Leaf from '../sociusLeaf.JPG';

const About = () => {
  return (
  <div className="about-container">
    <div className="firstSection">
      <h2>We are the experts</h2>
      <h1>
        Need to expand your reach and grow your leads?
        We've got you covered.
      </h1>
      <p>
        It’s not rocket science — if you want to grow your business, 
        you need to reach a wider audience and get more leads. Here at 
        Socius Marketing, our team of digital experts knows what it takes 
        to move the needle, to transform a standard marketing plan into 
        an effective, multi-channel strategy. We work as an extension of 
        your business to expand your marketing efforts; help you reach 
        ready-to-act, qualified customers; and work with you to make all 
        your marketing dreams come true.
      </p>
    </div>
    <div className="secondSection">
      <div className="box">
        <img className="item1" src={Cog} alt="Cog logo" />
        <h1 className="item2">Industry Experts</h1>
        <p className="item3">
          We employ some of the best talent in the industry. Our 
          team is made up of forward-thinking thought leaders in the 
          digital-marketing space.  
        </p>
        <img className="item4" src={Power} alt="Power symbol logo" />
        <h1 className="item5">Better Reporting</h1>
        <p className="item6">
          In digital marketing, transparent reporting is key. We arm our 
          clients with custom reports and the marketing data needed to make 
          business decisions.  
        </p>
        <img className="item7" src={Leaf} alt="Leaf logo" />
        <h1 className="item8">Growth Partner</h1>
        <p className="item9">
          We’ll help you grow — and scale your marketing as you do. Whether 
          your business has been around for decades or is just taking off, 
          our team has the experience needed to catapult you to success. 
        </p>
      </div>  
    </div>
    <button className="nav-button about-button" type="button">LEARN MORE</button>
  </div>
  )
};

export default About;
