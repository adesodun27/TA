import React from 'react'
import { footerIcons } from "../constants";

const Footer = () => {
  return (
    <section className=" md:pt-16 pt-0 md:px-[100px] px-4 md:pb-0 pb-16 bg-white w-full max-container">
      <div className="flex md:flex-row flex-col md:gap-4 gap-16 md:justify-between md:items-center justify-start border-t-[1px] border-social md:py-4 pt-16">
        <div className="flex flex-col gap-2 md:w-[721px] w-[343px]">
          <h1 className="font-jaini font-normal text-[48px] leading-[48px] text-black">
            TA
          </h1>
          <p className="font-satoshi text-[16px] leading-[25.6px] font-normal">
            Result-driven Front-end Developer
          </p>
        </div>
        <div className="flex md:justify-end md:items-center md:gap-1 gap-4">
          {footerIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-buttonbg rounded-[12px] p-3"
            >
              <img src={item.src} alt={item.alt} className="xl:w-4 xl:h-4 w-14 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer