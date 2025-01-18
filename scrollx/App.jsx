import React from "react";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-md z-10">
        <div className="flex justify-center space-x-10 py-4">
          <div
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("home")}
          >
            Home
          </div>
          <div
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("product")}
          >
            Product
          </div>
          <div
            className="cursor-pointer hover:text-gray-400"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="flex h-screen w-full snap-x overflow-hidden"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}>
        <div
          id="home"
          className="flex-shrink-0 h-full w-full flex justify-center items-center bg-blue-200 snap-start">
            <h1 className="text-4xl font-bold">Ini adalah halaman Home</h1>
        </div>
        <div
          id="product"
          className="flex-shrink-0 h-full w-full flex justify-center items-center bg-green-200 snap-start"
        >
          <h1 className="text-4xl font-bold">Ini adalah halaman Product</h1>
        </div>
        <div
          id="contact"
          className="flex-shrink-0 h-full w-full flex justify-center items-center bg-yellow-200 snap-start"
        >
          <h1 className="text-4xl font-bold">Ini adalah halaman Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
