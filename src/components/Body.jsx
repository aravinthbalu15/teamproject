import React, { useState, useEffect } from 'react';
import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import "../Style/Body.css";

const Body = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bodySection1 = document.getElementById('bodySection');
      const bodySection2 = document.getElementById('bodySection2');
      const rect1 = bodySection1.getBoundingClientRect();
      const rect2 = bodySection2.getBoundingClientRect();
      
      if ((rect1.top <= window.innerHeight && rect1.bottom >= 0) || (rect2.top <= window.innerHeight && rect2.bottom >= 0)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="body-wrapper">
      {/* First Section */}
      <div className={`body-container section-1 ${isVisible ? 'visible' : ''}`} id="bodySection">
        <div className="text-section">
          <h2>St JOSEPH CHURCH</h2>
          <p>அன்றைய கம்பிளார் ஊர் தற்போதைய கம்பிளாரின் தெற்குப் பகுதியில் அதிகமான குடும்பங்கள் வசித்து வந்த நிலையில் அமைந்திருந்தது. அன்று ஊரின் வடக்குப் பகுதியில் மிகக் குறைவான Stahap of Kottir.
</p>
        </div>
        <div className="image-section">
          <img src={Image1} alt="Ellapaddy Church" className="image" />
        </div>
      </div>
      
      {/* Second Section */}
      <div className={`body-container section-2 ${isVisible ? 'visible' : ''}`} id="bodySection2">
       
      </div>
    </div>
  );
};

export default Body;
