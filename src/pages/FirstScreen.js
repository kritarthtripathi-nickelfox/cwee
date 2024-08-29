import React, { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
import '../style/FirstScreen.css'
import FirstScreenContentPart from './FirstScreenContentPart';

function FirstScreen() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine visibility and position of the text box based on scrollY
    const showContent = scrollY >= 200;
    const textBoxPosition = showContent
        ? 'top-[10%] translate-y-[-10%]' // Adjust to the final position
        : 'bottom-[10rem]'; // Initial position

    return (
        <div className="relative min-h-screen">
            <div
                className="fixed inset-0 bg-cover bg-center FirstScreen"
            />
            <div className="ImageContainer">
                {scrollY < 300 ? (
                    <>
                        <img
                            className="LogoImage"
                            alt="Logo"
                            src="/ceewLogo@2x.png"
                        />
                        <img
                            className="titleImage"
                            alt="Title"
                            src="/title@2x.png"
                        />
                        <button
                            className="centerButton"
                        >
                            Let's Go
                        </button>
                    </>
                ) : (
                  <></>
                )}
            </div>
        </div>
    );
}

export default FirstScreen
