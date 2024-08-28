import React from "react";
import { Parallax } from "react-scroll-parallax";
 
const Home = () => {
  return (
    <div className="w-full relative bg-lightskyblue h-[1848.375rem] overflow-hidden text-center text-[1.5rem] text-black font-lato">
      <div className="fixed bg-lightskyblue inset-0 z-[1]">
        <img
          className="w-full h-auto object-cover mix-blend-screen"
          alt=""
          src="/sunrays@2x.png"
        />
      </div>
      <div className="relative z-[2]">
        <div className="relative w-full">
          <img
            className="w-full h-auto object-cover"
            alt="Clouds"
            src="/clouds@2x.png"
          />
          <img
            className="w-full h-[100vh] object-cover absolute top-0 left-0"
            alt=""
            src="/illustration@2x.png"
          />
        </div>
        <img
          className="absolute top-[0rem] left-[calc(50%_-_316.2px)] w-[39.525rem] h-[9.375rem] object-cover"
          alt=""
          src="/title@2x.png"
        />
      </div>
      <div className="relative z-[2]">
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
          voluptate amet iusto saepe veritatis quod magnam itaque quam
          praesentium odit modi dignissimos laudantium voluptatum quos eum,
          architecto repellendus iste. Earum?
        </h1>
      </div>
    </div>
  );
};
 
export default Home;