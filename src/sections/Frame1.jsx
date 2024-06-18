import React from 'react'
import { frame1 } from "../constants";
import Button from "../components/Button";
import Button1 from "../components/Button1";

const Frame1 = () => {
   const handleLiveProjectClick = (url) => {
     window.open(url, "_blank"); // Open link in a new tab
   };

   const handleGithubRepoClick = (url) => {
     window.open(url, "_blank"); // Open link in a new tab
   };
  return (
    <section className="max-container w-full">
      <div className="md:pt-32 pt-16 xl:px-[205px] px-[52px]">
        <h1 className="font-satoshi font-normal text-[32px] leading-[48px] text-black">
          Some of the Projects I have worked on:
        </h1>
        <div className="flex flex-col gap-10">
          {frame1.map((item, index) => (
            <div key={item.label} className="flex flex-col gap-4 xl:pt-10">
              <img
                src={item.image}
                alt="image"
                className="w-[1030px] md:h-[502px] h-[202px] rounded-[24px]"
              />
              <h1 className="font-satoshi font-normal text-[32px] leading-[24px] text-primary xl:pt-10">
                {item.Header}
              </h1>
              <p className="font-satoshi font-normal text-[16px] leading-[21.6px] text-secondary">
                {item.details}
              </p>
              <div className="flex gap-4">
                <Button
                  label="View Live Project"
                  onClick={() => handleLiveProjectClick(item.liveProjectUrl)}
                />
                <Button1
                  label="View Github Repo"
                  onClick={() => handleGithubRepoClick(item.githubRepoUrl)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Frame1