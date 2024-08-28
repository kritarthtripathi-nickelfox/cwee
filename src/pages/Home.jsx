import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textBoxPosition = scrollY < 100 ? 'bottom-[10rem]' : 'top-[40%] translate-y-[-50%]'; // Adjust positioning

  return (
    <div className="w-full relative bg-skyblue h-auto overflow-hidden text-center text-[1.5rem] text-black font-lato">
      {/* First Section with Title and Description */}
      <div className="relative w-full h-auto">
        {/* Static First Image */}
        <img
          className="w-full h-auto object-cover mix-blend-screen"
          alt=""
          src="/Frame 29.png"
        />

        {/* Conditional Rendering of Title Image or Text Box */}
        {scrollY < 100 ? ( // Adjust this threshold as needed
          <Fade top>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zoom>
                <img
                  className="w-[50%] h-auto object-contain"
                  alt=""
                  src="/title@2x.png"
                />
              </Zoom>
            </div>
          </Fade>
        ) : (
          <Slide bottom>
             <div
          className={`absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 w-[50rem] h-[18.75rem] flex flex-row items-center justify-center p-[2.5rem] box-border ${textBoxPosition}`}
          style={{ transform: 'translateY(-50%)' }}
        >
          <div className="w-[44.563rem] relative tracking-[-0.02em] leading-[3.5rem] text-[2rem] flex items-center shrink-0">
            Anomalous sunshine, packed cities, expensive land, changing
            climate — what are the ground-level challenges to installing 7,000
            GW of renewable energy (RE) capacity in India? That's the number
            we might need to go net zero by 2070.
          </div>
        </div>
          </Slide>
        )}
      </div>

      {/* Remaining Images */}
      <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Camel.png"
      />
      <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Tank.png"
      />
      <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Frame 36.png"
      />
       <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Frame 37.png"
      />
       <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Frame 35.png"
      />
       <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Frame 34.png"
      />
       <img
        className="w-full h-auto object-cover mix-blend-screen"
        alt=""
        src="/Frame 33.png"
      />
    </div>
  );
};

export default Home;

 