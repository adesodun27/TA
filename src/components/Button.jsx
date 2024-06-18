import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary font-normal text-[16px] leading-[20.16px] items-center rounded-[5px] py-2.5 px-5 text-white"
    >
      {label}
    </button>
  );
};

export default Button