import React from "react";

const SquareButton = ({ children, onClick, className }: any) => {
  return (
    <button onClick={onClick} className={`relative w-fit cursor-pointer group ${className}`}>
      <div className="bg-primary z-[3] relative h-full group-hover:bg-secoundry border border-secoundry group-hover:text-white">{children}</div>
      <div className="bg-secoundry absolute top-1 left-1 z-[1] -right-1 group-hover:bg-primary -bottom-1 group-hover:right-0 group-hover:bottom-0 transition-all duration-200 ease-linear" />
    </button>
  );
};

export default SquareButton;
