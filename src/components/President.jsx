import React from "react";
import PresidentImage from "../images/image2.png"; // Ensure high-resolution image
import "../Style/President.css";

const President = () => {
  return (
    <div className="president-wrapper">
      <div className="president-container">
        {/* Left Side - Image */}
        <div className="president-image-section">
          <img src={PresidentImage} alt="President" className="president-image" />
        </div>

        {/* Right Side - Text */}
        <div className="president-text-section">
          <h4 className="president-title">
            <span className="line-left mb-5"></span> <span className="bold-title mb-5 ">President</span> <span className="line-right mb-5"></span>
          </h4>
          <p className="president-description mb-5">
            Rev. <strong>Fr. William</strong>, the esteemed President of 
            <strong> St. Joseph church</strong>, has been a 
            <strong> guiding light</strong> to our church community for many years. 
            With a deep commitment to <strong>faith</strong> and <strong>service</strong>, he leads our congregation 
            with <strong>wisdom, compassion, and dedication</strong>.  
           
            His mission is to <strong>inspire spiritual growth, foster unity, and extend the love of Christ</strong> 
            to all. Through his leadership, the church has <strong>flourished</strong> as a place of 
            <strong>worship, learning, and charitable outreach</strong>.  
            
            Always available for <strong>guidance and support</strong>, <strong>Rev. [President's Name]</strong> continues 
            to <strong>strengthen our faith</strong> and bring people <strong>closer to God</strong>.
          </p>
          {/* <button className="president-more-btn">MORE</button> */}
        </div>
      </div>
    </div>
  );
};

export default President;
