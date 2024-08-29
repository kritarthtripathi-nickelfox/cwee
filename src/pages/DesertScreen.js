import React from 'react';
import '../style/DesertScreen.css'; // Ensure this file contains your CSS

function DesertScreen() {
    return (
        <div className='DesertScreen'>
            <div
                className='absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 flex flex-row items-center justify-center p-[2.5rem] box-border Content'
            >
                <div className=" w-[56.563rem] relative tracking-[-0.02em] leading-[3.5rem] text-[2rem]  items-center shrink-0">
                    It is 2024, and we have already installed 70 GW of solar and 44 GW of wind capacity. For instance, <span className='HighlightText'>Bhadla in Rajasthan </span>
                     houses the world’s largest solar park. South of that is Khavda in Kachchh, Gujarat, where construction is underway on the  <span className='HighlightText'> world's largest
                    hybrid RE park </span>. The park will have a generation capacity of <span className='HighlightText'>30 GW </span> from both solar panels and wind turbines.
                </div>
            </div>
        </div>
    );
}

export default DesertScreen;
