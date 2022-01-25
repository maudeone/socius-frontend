import React from 'react';
import logo from '../socius.JPG';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
  } from "react-share";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container2">  
      <div className="row footer">
        <img className="footer-image" src={logo} alt="logo" />
        <a className="nav-link" href="#">888-876-2487</a>
        <p>
        2701 N. Rocky Point Dr., Suite 1045 <br />Tampa, FL 33607  
        </p>
        <div>
          <FacebookShareButton
            url={"https://github.com/maudeone"}
            quote={"Fullstack Developer"}
            hashtag="#javascript"
          >
          <FacebookIcon size={20}/>    
          </FacebookShareButton>
          <TwitterShareButton
            url={"https://github.com/maudeone"}
            quote={"Fullstack Developer"}
            hashtag="#javascript"
          >
          <TwitterIcon className="twitter" size={20}/>    
          </TwitterShareButton>
          <RedditShareButton
            url={"https://github.com/maudeone"}
            quote={"Fullstack Developer"}
            hashtag="#javascript"
          >
          <RedditIcon className="mx-1" size={20}/>    
          </RedditShareButton>
          <LinkedinShareButton
            url={"https://github.com/maudeone"}
            quote={"Fullstack Developer"}
            hashtag="#javascript"
          >
          <LinkedinIcon className="mx-1" size={20}/>    
          </LinkedinShareButton>  
        </div>
      </div>
      <div className="footer2">
        <a className="nav-link link1">Solutions</a>
        <a className="nav-link link2">Careers</a>
        <a className="nav-link link3">Learn More</a>
        <a className="nav-link link4">Contact</a>

        <a className="nav-link link5">Health Services</a>
        <a className="nav-link link6">Home Services</a>
      </div> 
      </div> 
    </div>
  )  
};

export default Footer;
