import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/Event.css";

import event1 from "../images/event-images/1.png";
import event2 from "../images/event-images/2.png";
import event3 from "../images/event-images/3.png";
import event4 from "../images/event-images/1.png";

const eventPosters = [
  { id: 1, image: event1, alt: "Event 1" },
  { id: 2, image: event2, alt: "Event 2" },
  { id: 3, image: event3, alt: "Event 3" },
  { id: 4, image: event4, alt: "Event 4" },
];

const UpcomingEvents = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992, // Medium screens (tablets)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // Small screens (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container upcoming-events">
      <h2 className="text-center mb-4">UPCOMING EVENTS</h2>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <Slider {...settings}>
            {eventPosters.map((event) => (
              <div key={event.id} className="event-card" onClick={() => handleEventClick(event.id)}>
                <img src={event.image} alt={event.alt} className="event-image img-fluid" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
