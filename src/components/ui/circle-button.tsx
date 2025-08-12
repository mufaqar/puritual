import React from "react";

const CircleButton = ({ children, onClick, className, BgHovr }: any) => {
  return (
    <button className={`${className} md:w-[94px] w-[64px] group relative md:h-[94px] h-[64px] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ease-linear ml-auto`}
      onClick={onClick}
    >
      {children}
      <div className={`${BgHovr} md:w-[94px] w-[64px] absolute md:h-[94px] h-[64px] scale-0 group-hover:scale-[1.01] transition-all duration-300 ease-linear rounded-full`} />
    </button>
  );
};

export default CircleButton;
