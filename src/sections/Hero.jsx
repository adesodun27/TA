import React from "react";

const Hero = () => {
  return (
    <section className="max-container w-full">
      <div className="pt-32 pr-0 pb-[65px] xl:pl-[208px] pl-[52px] gap-1">
        <div className="flex flex-col gap-4 xl:w-[721px] w-[80%]">
          <h1 className="font-satoshi font-light text-[48px] leading-[48px] text-primary">
            Hi 👋🏽
          </h1>
          <p className="font-satoshi font-light md:text-[48px] text-[28px] md:leading-[72px] leading-[36px] text-primary">
            I’m <span className="font-normal">Titilope Adesodun,</span>
            <br />a result-driven{" "}
            <span className="font-normal">Frontend Developer</span>
          </p>
        </div>

        <p className="font-satoshi text-primary font-normal text-[18px] leading-[27px]">
          aspiring to be a FullStack Developer{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
