import React from "react";

const CircleButton = ({ children, onClick, className, BgHovr }: any) => {
  return (
    <button className={`${className} w-[94px] group relative h-[94px] rounded-full flex justify-center mt-4 items-center cursor-pointer transition-all duration-300 ease-linear`}
      onClick={onClick}
    >
      {children}
      <div className={`${BgHovr} w-[94px] absolute h-[94px] scale-0 group-hover:scale-[1.01] transition-all duration-300 ease-linear rounded-full`} />
    </button>
  );
};

export default CircleButton;
