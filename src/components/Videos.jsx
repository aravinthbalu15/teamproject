import React from 'react';
import "../Style/Videos.css";
import video1 from "../Videos/video1.mp4";
import video2 from "../Videos/video2.mp4";
import video3 from "../Videos/video3.mp4";
import video4 from "../Videos/video4.mp4";
import video5 from "../Videos/video5.mp4";
import video6 from "../Videos/video6.mp4";


import { Container, Row, Col } from 'react-bootstrap';



const videoData = [

  { id: 1, url: video1, title: "Church Event 1" },

  { id: 2, url: video2, title: "Sunday Mass Highlights" },

  { id: 3, url: video3, title: "Special Prayer Session" },

  { id: 4, url: video4, title: "Gospel Choir Performance" },

  { id: 5, url: video5, title: "Christmas Celebration" },

  { id: 6, url: video6, title: "Community Gathering" },
  { id: 1, url: video1, title: "Church Event 1" },

  { id: 2, url: video2, title: "Sunday Mass Highlights" },

  { id: 3, url: video3, title: "Special Prayer Session" },

  { id: 4, url: video4, title: "Gospel Choir Performance" },

  { id: 5, url: video5, title: "Christmas Celebration" },

  { id: 6, url: video6, title: "Community Gathering" },

];



const Videos = () => {

  return (

    <Container className="videos mt-5 ">

      <h2 className="text-cente mt-3">Our Videos</h2>

      <Row>

        {videoData.map((video) => (

          <Col md={4} sm={6} xs={12} key={video.id} className="mb-4">

            <div className="video-container ">

              <video width="100%" height="250" controls>

                <source src={video.url} type="video/mp4" />

                Your browser does not support the video tag.

              </video>

              <h5 className="text-center mt-2">{video.title}</h5>

            </div>

          </Col>

        ))}

      </Row>

    </Container>

  );

};



export default Videos;