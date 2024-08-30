import React, { useState, useEffect } from 'react';
import '../style/CityScreen.css'; // Ensure this file contains your CSS
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";


function CityScreen() {
    const [scrollY, setScrollY] = useState(0);
    const [state, setState] = useState({
        isPaneOpenRight: false,
        isPaneOpenLeft: false,
    });


    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    const handlePaneLeftClick = () => {
        setState({ isPaneOpenLeft: true })
        setScrollY(0)
    }


    const handlePaneRightClick = () => {
        setState({ isPaneOpenRight: true })
    }


    return (
        <div className='CityScreen'>
            <div
                className='absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 flex items-center justify-center p-[2.5rem] box-border Content'
            >
                <div className=" w-[56.563rem] relative tracking-[-0.02em] leading-[3.5rem] text-[2rem]  items-center shrink-0">
                    Scaling RE beyond 300 GW is where things could start getting more complicated. Bustling cities and areas with steeper land prices and land conflicts enter the mix. What does that look like, you ask? Let’s explore.
                </div>
                <div className='buttonContainer'>
                    <button
                        className="CityOneButton"
                        onClick={handlePaneLeftClick}
                    >
                        Explore TamilNadu
                    </button>
                    <button
                        className="CityTwoButton"
                        onClick={handlePaneRightClick}
                    >
                        Explore AndhraPradesh
                    </button>
                </div>
            </div>
            <SlidingPane
                className="SlidePane"
                overlayClassName="SlidePane"
                isOpen={state.isPaneOpenLeft}
                title=""
                subtitle=""
                hideHeader
                from="bottom"
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ isPaneOpenLeft: false });
                }}
            >
                <div className="relative min-h-screen">
                    <div
                        className="fixed inset-0 bg-cover bg-center TamilNaduScreenFade"
                    />
                    {scrollY < 300 ? (

                        <div className=''>

                            <div
                                className='absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 flex flex-row items-center justify-center p-[2.5rem] box-border Content'
                            >

                                <div className=" w-[56.563rem] relative tracking-[-0.02em] leading-[3.5rem] text-[2rem]  items-center shrink-0">
                                    Tamil Nadu offers more than 150 GW of low-cost wind potential. Up to 50 GW, it has the lowest wind power generation costs. However, 23% of its ~500 GW solar potential is in districts such as Tenkasi and Coimbatore, with high land prices.
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className='absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 flex items-center justify-center p-[2.5rem] box-border Content'
                        >
                            <div className=" w-[56.563rem] relative tracking-[-0.02em] leading-[3.5rem] text-[2rem]  items-center shrink-0">
                                Scaling RE beyond 300 GW is where things could start getting more complicated. Bustling cities and areas with steeper land prices and land conflicts enter the mix. What does that look like, you ask? Let’s explore.
                            </div>
                            <div className='buttonContainer'>
                                <button
                                    className="CityOneButton"
                                onClick={handlePaneRightClick}
                                >
                                    Explore AndhraPradesh
                                </button>
                                <button
                                    className="CityTwoButton"
                                // onClick={handlePaneRightClick}
                                >
                                    Move Ahead
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </SlidingPane>
            <SlidingPane
                className="SlidePane"
                overlayClassName="SlidePane"
                isOpen={state.isPaneOpenRight}
                title=""
                subtitle=""
                hideHeader
                from="bottom"

                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ isPaneOpenRight: false });
                }}
            >
                <div className='AndhraPradeshScreen'>
                    <div
                        className='absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 flex flex-row items-center justify-center p-[2.5rem] box-border Content'
                    >
                        <div className=" w-[56.563rem] relative tracking-[-0.02em] leading-[3.5rem] text-[2rem]  items-center shrink-0">
                            Tamil Nadu offers more than 150 GW of low-cost wind potential. Up to 50 GW, it has the lowest wind power generation costs. However, 23% of its ~500 GW solar potential is in districts such as Tenkasi and Coimbatore, with high land prices.
                        </div>
                    </div>
                </div>
                {/* <div>And I am pane content. BTW, what rocks?</div> */}
                <br />
                {/* <img src="img.png" /> */}
            </SlidingPane>
        </div>
    );
}

export default CityScreen;
