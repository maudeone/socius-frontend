import React from 'react';
import Comp from '../comp.png';
import CompLogo from '../compLogo.png';
import Seo from '../seo.png';
import Media from '../media.png';
import Content from '../content.png';
import Digital from '../digital.png';
import Social from '../social.png';
import Review from '../review.png';

const HowHelp = () => {
  return (
    <div className="section-container">
      <div className="how-container">
        <h2>Solutions &amp; Services</h2>
        <h1>
          How We Help
        </h1>
      </div>
      <div className="image-container">
        <img className="comp" src={Comp} alt="computer" />
      </div>
      <div className="box width">
        <img className="item1" src={CompLogo} alt="Computer logo" />
        <h1 className="item2">CUSTOM WEBSITES</h1>
        <p className="item3">
          Our award-winning design team works alongside our in-house web 
          development team to build optimized websites designed to convert 
          customers. 
        </p>
        <img className="item4" src={Seo} alt="SEO logo" />
        <h1 className="item5">SEO</h1>
        <p className="item6">
          The internet is competitive, but our SEO strategy team knows what 
          it takes to get your website to rank for terms that customers are 
          using to search. 
        </p>
        <img className="item7" src={Media} alt="media logo" />
        <h1 className="item8">PAID MEDIA</h1>
        <p className="item9">
          Specializing in PPC, display, and programmatic ads, our paid media 
          team builds and manages efficient ad campaigns that drive quality 
          leads.
        </p>
      </div>
      <div className="box2 width2">
        <img className="item1" src={Content} alt="Content logo" />
        <h1 className="item2">CONTENT</h1>
        <p className="item3">
          Our in-house content team specializes in writing unique, custom, 
          optimized web content as well as copywriting for other digital 
          channels, such as email and social media.
        </p>
        <img className="item4" src={Digital} alt="Digital logo" />
        <h1 className="item5">DIGITAL STRATEGIES</h1>
        <p className="item6">
          As your partner, Socius will work to understand your business’s 
          needs and KPIs in order to develop custom strategies that align 
          with your goals.
        </p>
        <img className="item7" src={Social} alt="Social logo" />
        <h1 className="item8">SOCIAL MEDIA</h1>
        <p className="item9">
          We specialize in developing creative, powerful campaigns for 
          both paid and organic social media that will drive engagement 
          across your social channels.
        </p>
        <img className="item10" src={Review} alt="Review logo" />
        <h1 className="item11">REVIEW CANVASSING</h1>
        <p className="item12">
          Virtual word-of-mouth matters, and it’s important to gain positive 
          reviews for your business online so new customers know how great 
          you are — we’ll help you get them.
        </p>
      </div>    
    </div>
  )
};

export default HowHelp;
