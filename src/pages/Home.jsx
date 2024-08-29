import React, { useState, useEffect } from "react";
import FirstScreen from "./FirstScreen";
import DesertScreen from "./DesertScreen";
import FirstScreenContentPart from "./FirstScreenContentPart";
import LevelOneScreen from "./LevelOneScreen";

const Home = () => {
  return (
    <div className="relative h-auto">
      <FirstScreen />
      <FirstScreenContentPart />
      <DesertScreen />
      <LevelOneScreen />
    </div>
  );
};

export default Home;
