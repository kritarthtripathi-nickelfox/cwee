import React from 'react'
import '../style/FirstScreenContentPart.css'


function FirstScreenContentPart() {
    return (
        <div className="z-10 FirstScreenContentPart">
            <div
                className=' mt-85 absolute left-[calc(50%_-_400px)] rounded-3xs bg-gray-100 w-[50rem] h-[18.75rem] flex flex-row items-center justify-center p-[2.5rem] box-border Content'
            >
                <div className="w-[44.563rem] relative tracking-[-0.02em] leading-[3.5rem] text-[2rem]  items-center shrink-0">
                    Anomalous sunshine, packed cities, expensive land, changing
                    climate — what are the ground-level challenges to installing 7,000
                    GW of renewable energy (RE) capacity in India? That's the number
                    we might need to go net zero by 2070.
                </div>
            </div>
        </div>
    )
}

export default FirstScreenContentPart