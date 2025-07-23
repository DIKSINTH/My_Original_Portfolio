import React, { useState } from "react";
import photo from "../assets/images/my_photo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-[15vh] bg-black flex flex-row text-white items-center relative">
        <h1 className="text-md ml-8 md:text-xl lg:text-3xl">DIKSINTH_S</h1>
        <img
          src={photo}
          className="w-14 h-14 rounded-full ml-6 md:w-16 md:h-16 lg:w-18 lg:h-18"
          alt="Diksinth S"
          title="Diksinth S Photo"
        />

        {/* Hamburger - visible on mobile only */}
        <button
          className="ml-auto mr-6 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Menu - visible on medium and above */}
        <ul className="hidden md:flex flex-row text-sm ml-30">
          <li className="ml-15">Home</li>
          <li className="ml-15">Experience</li>
          <li className="ml-15">Projects</li>
          <li className="ml-15">Skills</li>
          <li className="ml-15">Contact</li>
        </ul>
      </div>

      {/* Mobile menu - shown only if hamburger is open */}
      {isOpen && (
        <ul className="flex flex-col bg-black text-white px-6 py-4 md:hidden">
          <li className="py-2">Home</li>
          <li className="py-2">Experience</li>
          <li className="py-2">Projects</li>
          <li className="py-2">Skills</li>
          <li className="py-2">Contact</li>
        </ul>
      )}
    </>
  );
}

export default Header;
