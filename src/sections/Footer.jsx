import React from 'react'
import { footerIcons } from "../constants";

const Footer = () => {
  return (
    <section className=" pt-16 xl:px-[100px] bg-white w-full max-container">
      <div className="flex xl:flex-row flex-col gap-4 justify-between items-center border-t-[1px] border-social py-4">
        <div className="flex flex-col gap-2 xl:w-[721px]">
          <h1 className="font-jaini font-normal text-[48px] leading-[48px] text-black">
            TA
          </h1>
          <p className="font-satoshi text-[16px] leading-[25.6px] font-normal">
            Result-driven Front-end Developer
          </p>
        </div>
        <div className="flex justify-end items-center gap-1">
          {footerIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-social rounded-[12px] p-3"
            >
              <img src={item.src} alt={item.alt} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer