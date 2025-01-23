import React from "react";
import Carousel from "./components/Carousel";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const pages = [<Page1 key="page1" />, <Page2 key="page2" />];

const App = () => {
  return (
    <div>
      <Carousel>
        {pages.map((page, index) => (
          <div key={index}>{page}</div>
        ))}
      </Carousel>
    </div>
  );
};

export default App;
