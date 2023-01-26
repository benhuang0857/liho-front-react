import React from "react";

function HeroComponet() {
    return (
        <div className="max-w-[1640px] max-auto p-4">
            <div className="max-h-[500px] relative">
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        The <span className="text-orange-500">Best</span>
                    </h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        <span className="text-orange-500">Foods</span> Delivered
                    </h1>
                </div>
                <img className="w-full max-h-[500px] object-cover" src="https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg" alt="" />
            </div>
        </div>
    )
}

export default HeroComponet