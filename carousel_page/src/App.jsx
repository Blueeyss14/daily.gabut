import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Carousel from "./components/Carousel";


const pages = [
  <Page1 key="page1"/>,
  <Page2 key="page2"/>,
]

const App = () => {
  return (
    <Carousel>
      {pages.map((page, index) => (
        <div key={index}>{page}</div>
      ))}
    </Carousel>
  );
}

export default App;

{/*
const App = () => {

  const scrolToSection = (id) => {
    const sections = document.getElementById(id);

    if (sections) {
      sections.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }

  return (
    <div>
      <div>
        <div className="w-screen h-10 bg-purple-400 fixed flex justify-around">
          <button onClick={() => scrolToSection("page1")} >Page1</button>
          <button onClick={() => scrolToSection("page2")} >Page2</button>
        </div>
      </div>
      <div className="w-screen h-screen overflow-hidden snap-x snap-mandatory flex">
        <div id="page1">
          <Page1 />
        </div>
        <div id="page2">
          <Page2 />
        </div>
      </div>
    </div>
  );
};

export default App;
*/}

