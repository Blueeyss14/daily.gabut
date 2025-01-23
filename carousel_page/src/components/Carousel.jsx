import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ children: pages }) => {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? pages.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === pages.length - 1 ? 0 : curr + 1));

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform ease-out duration-300"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {pages.map((page, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        {page}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button onClick={prev} className="p-2 bg-gray-200 rounded-full">
                    <ChevronLeft />
                </button>
                <button onClick={next} className="p-2 bg-gray-200 rounded-full">
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
