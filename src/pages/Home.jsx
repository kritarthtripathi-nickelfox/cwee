<<<<<<< HEAD
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
=======
import React from "react";

const Home = () => {
  return (
    <div className="w-full relative bg-skyblue h-auto overflow-hidden text-center text-[1.5rem] text-black font-lato">
      <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Frame 42.png"
      />
      <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Camel.png"
      />
>>>>>>> 12177664fc2b69aea66c4482cd045a9215e8e08e
    </div>
  );
};

export default Home;
