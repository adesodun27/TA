import React, { useState } from "react";
import { navLinks } from "../constants";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg"; // Add a close icon for the dropdown

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className=" py-7 md:px-[100px] px-[50px] bg-white w-full max-container">
      <nav className="flex justify-between items-center">
        <div className="font-jaini font-normal text-[48px] leading-[48px] text-black">
          <h1>TA</h1>
        </div>


          <ul className="flex justify-end items-center gap-6 max-lg:hidden ">
            {navLinks.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-satoshi leading-[16px] text-base text-button font-normal bg-buttonbg rounded-[32px] py-1.5 px-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

        <div className="hidden max-lg:block" onClick={toggleDropdown}>
          <img
            src={isDropdownOpen ? close : hamburger}
            alt="Menu Icon"
            width={25}
            height={25}
          />
        </div>
      </nav>

      {isDropdownOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md animate-slide-down">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-satoshi leading-normal text-lg text-button"
                  onClick={toggleDropdown}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
