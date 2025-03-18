import React from "react";

const SquareButton = ({ children, onClick, className }: any) => {
  return (
    <button onClick={onClick} className={`relative w-fit cursor-pointer group ${className}`}>
      <div className="bg-primary z-[3] relative h-full group-hover:bg-secoundry group-hover:text-white">{children}</div>
      <div className="bg-secoundry absolute top-1 left-1 z-[1] -right-1 group-hover:bg-primary -bottom-1" />
    </button>
  );
};

export default SquareButton;
