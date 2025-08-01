import Link from "next/link";
import React from "react";

const SquareButton = ({children, link, Custom_class}:any) => {
  return (
    <Link href={`${link}`} className={`bg-dark hover:bg-secoundry px-3 py-2 text-lg relative z-20 text-white flex text-center justify-center items-center shadow-[3px_3px_0_3px_rgb(174,208,54)] hover:shadow-[0px_0px_0_0px_rgb(174,208,54)] transition-all duration-300 ease-linear ${Custom_class}`}>
       {children}
    </Link>
  );
};

export default SquareButton;
