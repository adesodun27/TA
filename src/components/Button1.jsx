import React from 'react'

const Button1 = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-primary border-primary border-[1px] font-normal text-[16px] leading-[20.16px] items-center rounded-[5px] py-2.5 px-5"
    >
      {label}
    </button>
  );
};

export default Button1