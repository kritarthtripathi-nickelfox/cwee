import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../style/FirstScreen.css';

const FirstScreen = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentStage, setCurrentStage] = useState(0); // 0: First Box, 1: Second Box, 2: Second Image

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      const windowHeight = window.innerHeight;

      setScrollPosition(position);

      // Adjust stages based on a percentage of the window height
      if (position > windowHeight * 1.5) {
        setCurrentStage(3); // Show content for the second image
      } else if (position > windowHeight * 0.8) {
        setCurrentStage(2); // Show second image with curtain effect
      } else if (position > windowHeight * 0.3) {
        setCurrentStage(1); // Fade out first box, fade in second box
      } else {
        setCurrentStage(0); // Show first box
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className={`fixed-background ${currentStage >= 2 ? 'second-image' : 'first-image'}`}>
        <div className="content-boxes">
          <Fade bottom when={currentStage === 0}>
            <img
              className="w-[50%] mt-[-18rem] h-[10%] object-contain"
              style={{height:"0%"}}
              alt=""
              src="/Frame 39.png"
            />
          </Fade>

          <Fade bottom when={currentStage === 1}>
            <div className="z-10 FirstScreenContentPart">
              <div className='absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 w-[50rem] h-[10.75rem] flex flex-row items-center justify-center p-[0.5rem] box-border Content top-[-30rem]'>
                <div className="w-[44.563rem] relative tracking-[-0.02em] leading-[2.5rem] text-[1.3rem] items-center shrink-0">
                  Anomalous sunshine, packed cities, expensive land, changing
                  climate — what are the ground-level challenges to installing 7,000
                  GW of renewable energy (RE) capacity in India? That's the number
                  we might need to go net zero by 2070.
                </div>
              </div>
            </div>
          </Fade>

          <Fade bottom when={currentStage === 2}>
            <div className="absolute top-[-15.125rem] left-[calc(50%_-_360px)] rounded-3xs bg-gray-100 w-[40.063rem] flex flex-row items-center justify-center p-[2.5rem] box-border">
              <div className="w-[35.063rem] relative leading-[2rem] flex items-center shrink-0">
                <span className="w-full">
                  <p className="m-0">
                    <span className="font-lato text-black">{`It is 2024, and we have already installed 70 GW of solar and 44 GW of wind capacity. For instance, `}</span>
                    <b className="font-lato text-orangered-200">
                      Bhadla in Rajasthan
                    </b>
                    <span>{` houses the world’s largest solar park. South of that is Khavda in Kachchh, Gujarat, where construction is underway on the `}</span>
                    <b className="font-lato text-orangered-200">world's largest</b>
                  </p>
                  <p className="m-0">
                    <b className="font-lato text-orangered-200">hybrid RE park</b>
                    <span>{`. The park will have a generation capacity of `}</span>
                    <b className="font-lato text-orangered-200">30 GW</b>
                    <span className="font-lato text-black">
                      {" "}
                      from both solar panels and wind turbines.
                    </span>
                  </p>
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;
