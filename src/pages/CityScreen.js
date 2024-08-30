import React, { useState, useEffect } from 'react';
import '../style/CityScreen.css'; // Ensure this file contains your CSS
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";


function CityScreen() {
    const [scrollY, setScrollY] = useState(0);
    const [state, setState] = useState({
        isPaneOpenRight: false,
        isPaneOpenLeft: false,
        isPaneOpenLeftBottomTamil:false,
        isPaneOpenLeftBottomAndhra:false
    });
    const [position, setPosition] = useState(null)


    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollY]);

    const handlePaneBottomClickTamil = () => {
        setState({ isPaneOpenLeftBottomTamil: true })
        setScrollY(0)
        setPosition('bottom')
    }
    const handlePaneBottomClickAndhra = () => {
        setState({ isPaneOpenLeftBottomAndhra: true })
        setScrollY(0)
        setPosition('bottom')
    }
    const handlePaneLeftClick = () => {
        setState({ isPaneOpenLeft: true })
        setScrollY(0)
        setPosition('left')

    }
    const handlePaneRightClick = () => {
        setState({ isPaneOpenRight: true })
        setScrollY(0)
        setPosition('right')
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
                        onClick={handlePaneBottomClickTamil}
                    >
                        Explore TamilNadu
                    </button>
                    <button
                        className="CityTwoButton"
                        onClick={handlePaneBottomClickAndhra}
                    >
                        Explore AndhraPradesh
                    </button>
                </div>
            </div>
            <SlidingPane
                className="SlidePane"
                overlayClassName="SlidePane"
                isOpen={state.isPaneOpenLeftBottomTamil ?? state.isPaneOpenLeft}
                title=""
                subtitle=""
                hideHeader
                from={position}
                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ isPaneOpenLeftBottomTamil: false });
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
                isOpen={state.isPaneOpenLeftBottomAndhra ?? state.isPaneOpenRight}
                title=""
                subtitle=""
                hideHeader
                from={position}

                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setState({ isPaneOpenLeftBottomAndhra: false });
                }}
            >
                <div className="relative min-h-screen">
                    <div
                        className="fixed inset-0 bg-cover bg-center AndhraPradeshScreenFade"
                    />
                    {scrollY < 300 ? (

                        <div className='AndhraPradeshScreen'>
                            <div
                                className='absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 flex flex-row items-center justify-center p-[2.5rem] box-border Content'
                            >
                                <div className=" w-[56.563rem] relative tracking-[-0.02em] leading-[3.5rem] text-[2rem]  items-center shrink-0">
                                    With a solar potential of 233 GW and wind potential
                                    of 16 GW, Chittoor in Andhra Pradesh is a great site for
                                    clean energy development. However, the district—a 4-hour
                                    drive from Chennai and Bengaluru— has a high population
                                    density of 350+ people/square kilometre which might mean us running into problems of resident reluctance, complex pre-existing infrastructure, and unavailability of large continuous chunks of land.                          </div>
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
                                    onClick={handlePaneLeftClick}
                                >
                                    Explore TamilNadu
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
                <br />
            </SlidingPane>
        </div>
    );
}

export default CityScreen;
