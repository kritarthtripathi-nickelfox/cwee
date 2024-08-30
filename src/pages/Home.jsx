import React, { useState, useEffect } from "react";
import FirstScreen from "./FirstScreen";
import DesertScreen from "./DesertScreen";
import FirstScreenContentPart from "./FirstScreenContentPart";
import CityScreen from "./CityScreen";

const Home = () => {


  return (
    <div className="relative h-auto">
      <FirstScreen/>
      <FirstScreenContentPart/>
      <DesertScreen/>
      <CityScreen/>
    </div>
  );
};

export default Home;

 
