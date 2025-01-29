import React from "react";
import Home from "../pages/Home";
import Project from "../pages/project.Jsx";

const pages = [<Home key="home" />, <Project key="project" />];
const buttonColor = [
    "bg-blue-800",
    "bg-green-800",
];

const scrollToIndex = (index) => {
    const target = document.querySelectorAll(".page")[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

const Carousel = () => {
  return (
    <div className="overflow-hidden">
        <div className="flex justify-between">
            {buttonColor.map((btnColor, index) => (
                <div key={index} onClick={() => scrollToIndex(index)} className={`${btnColor} w-40 h-10 rounded-2xl`}></div>
            ))}
        </div>

      <div className="w-screen h-screen overflow-x-scroll snap-x snap-mandatory flex overflow-hidden">
        {pages.map((page, index) => (
            <div className="page w-screen h-screen flex shrink-0" key={index}>{page}</div>
        ))}
      </div>
      
    </div>
  );
};

export default Carousel;
