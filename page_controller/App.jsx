import React from "react";

import PageController from "./controller/PageController";

const item = [
  <h1 key="home">Home</h1>, 
  <h1 key="project">Project</h1>
];
const conColor = [
  "bg-red-300", 
  "bg-green-300"
];

const App = () => {
  return (
    <div className="w-screen h-screen bg-blue-200 flex justify-center items-center snap-x snap-mandatory">
      <PageController/>
      <div className="w-[160px] h-[50px] bg-green-400 fixed bottom-0 mb-10 rounded-2xl flex overflow-hidden">
        {item.map((items, index) => (
          <div
            className={`${conColor[index]} flex-1 flex justify-center items-center cursor-pointer`}>
            <div key={index}>{items}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
