import React from "react";
import Image1 from "../images/image1.png"; // Replace with correct path
import "../Style/Body.css";

const Body = () => {
  return (
    <div className="body-wrapper">
      {/* First Section */}
      <div className="body-container">
        <div className="text-section">
          <h4 className="section-title mb-5">
            <span className="underline2"></span>    St Joseph CHURCH
          </h4>
          <p className="description">
            Asia’s largest shrine to Saint George, about five million people visit it every year. 
            The church is thought to have been founded in 593 AD. It is regarded as one of the 
            oldest churches in Kerala, after the seven churches founded by Thomas the Apostle in 
            the first century AD. <strong className="read-more">read more...</strong>
          </p>
          {/* <button className="more-btn">MORE</button> */}

        </div>
        <div className="image-section2">
          <img src={Image1} alt="St. George Forane Church" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Body;
