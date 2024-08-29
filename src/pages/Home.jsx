import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import FirstScreen from "./FirstScreen";
import DesertScreen from "./DesertScreen";
import FirstScreenContentPart from "./FirstScreenContentPart";

const Home = () => {


  return (
    <div className="relative h-auto">
      <FirstScreen/>
      <FirstScreenContentPart/>
      <DesertScreen/>
    </div>
  );
};

export default Home;

 
