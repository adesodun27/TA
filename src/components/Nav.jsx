import React, { useState } from "react";
import { navLinks } from "../constants";
import hamburger from "../assets/icons/hamburger.svg";
import close from "../assets/icons/close.svg";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="py-7 md:px-[100px] pl-4 pr-[24px] xl:pl-[208px] md:pl-16 bg-white w-full max-container">
      <nav className="flex justify-between items-center">
        <div className="font-jaini font-normal text-[48px] leading-[48px] text-black">
          <h1>TA</h1>
        </div>

        <ul className="flex justify-end items-center gap-6 max-sm:hidden ">
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

        <div className="hidden max-sm:block" onClick={toggleDropdown}>
          <img
            src={isDropdownOpen ? close : hamburger}
            alt="Menu Icon"
            width={25}
            height={25}
          />
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white transform ${
          isDropdownOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center py-7 px-4 md:px-[100px] xl:pl-[208px]">
          <div className="font-jaini font-normal text-[48px] leading-[48px] text-black">
            <h1>TA</h1>
          </div>
          <div onClick={toggleDropdown}>
            <img src={close} alt="Close Icon" width={25} height={25} />
          </div>
        </div>
        <ul className="flex flex-col items-center gap-8 py-4 mt-2">
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
    </header>
  );
};

export default Nav;
