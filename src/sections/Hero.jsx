import React from "react";

const Hero = () => {
  return (
    <section className="max-container w-full">
      <div className="md:pt-32 pt-8 pb-8 pr-4  md:pb-[65px] xl:pl-[208px] md:pl-16 pl-4 gap-1">
        <div className="flex flex-col gap-4 xl:w-[721px] md:[500px] w-[80%]">
          <h1 className="font-satoshi font-light md:text-[48px] md:leading-[48px] text-[24px] leading-6 text-primary">
            Hi 👋🏽
          </h1>
          <p className="font-satoshi font-light md:text-[48px] text-[28px] md:leading-[72px] leading-[40px] text-primary">
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
