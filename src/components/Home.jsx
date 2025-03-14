import React from "react";
import BackgroundSlider from "./Background";
import Body from "./Body";
import Family from "./Family";
import President from "./President";
import Quotes from "./Quotes"
import ImageLink from "./ImageLink";
import VideoLink from "./VIdeoLink";
import VisitingTime from "../components/VIsitingTime";
import Event from "./Event";
import History from "./History";
const Home = () => {
  return (
    <div>
      <BackgroundSlider />
      <Body />
      
      <President />
      <Quotes />
     
       <Event />
       <VisitingTime />
       <ImageLink />
       <History /> 
        <VideoLink /> 
       <Family /> 

    </div>
  );
};

export default Home;
