import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/History.css";

const History = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/history");
  };

  return (
    <div className="container my-5">
      <div className="row align-items-start">
        {/* Church Image */}
        <div className="col-md-5 mt-5">
          <img src="../src/images/image2.png" alt="Church History" className="img-fluid history-image" />
        </div>

        {/* History Content */}
        <div className="col-md-7">
          {/* Added Heading */}
          <h2 className="history-heading">A Journey of Faith: Our Church’s Legacy</h2>

          <p className="history-text">
            Our church has stood as a beacon of faith for generations, witnessing the passage of time and nurturing a community built on devotion and unity. 
            Founded in the early years, it has been a place of worship, solace, and spiritual growth for many. Over the decades, it has grown in stature, 
            welcoming thousands of worshippers and evolving to meet the needs of the faithful. 
            <br />
            <br />
            With its rich architectural heritage and deep-rooted traditions, the church continues to inspire and guide. From humble beginnings to 
            becoming a cornerstone of the community, its journey has been one of unwavering faith and service.
          </p>

          {/* View More Link */}
          <p className="view-more" onClick={handleViewMore}>View More →</p>
        </div>
      </div>
    </div>
  );
};

export default History;
