import { useState } from "react";
import RegisterButton from "./buttons/RegisterButton";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ onItemClick }) {
  const navItems = ["Home", "Features", "Community", "Blog", "Princing"];
  const [isClicked, setIsClicked] = useState(false);
  const IconMenu = isClicked ? FaTimes : FaBars;

  return (
    <div className="flex md:justify-between pl-10 md:items-center py-5 md:px-20 bg-white flex-col md:flex-row">
      <img src="assets/Logo.png" className="hidden md:block" />

      {/* Mobile: Burger icon */}
      <div className={`w-auto ${isClicked ? 'h-auto' : 'h-auto'} flex flex-col justify-evenly md:hidden overflow-hidden transition-all`}>
        <IconMenu className={`block md:hidden text-2xl ${isClicked ? 'mb-3' : 'mb-0'} cursor-pointer`} onClick={() => setIsClicked(!isClicked)} />
            {isClicked && navItems.map((item, index) => (
          <h1
            className="pt-2 cursor-pointer flex"
            onClick={() => onItemClick(index)}
          >
            {item}
          </h1>
        ))}
      {isClicked && <RegisterButton className="w-fit mt-5" />}

      </div>
      <div className="flex items-center">
        {navItems.map((item, index) => (
          <h1
            className="pl-10 cursor-pointer hidden md:flex"
            onClick={() => onItemClick(index)}
          >
            {item}
          </h1>
        ))}
        <RegisterButton className="hidden md:flex" />
      </div>
    </div>
  );
}
