import React from "react";
import Logo from "./logo";
import CartButton from "./cart-button";
import SquareButton from "../ui/square-button";
import Menu from "./menu";

const Header = () => {
  return (
    <>
      <header className="py-5 flex justify-between border-b border-[#70707011] items-center px-10 fixed w-full z-[1000]">
        <Logo />
        <div className="flex gap-2.5">
          <CartButton/>
          <SquareButton>
            <p className="uppercase flex h-full p-2 px-[21px] pt-4 justify-center items-center text-center">Products</p>
          </SquareButton>
          <Menu/>
        </div>
      </header>
    </>
  );
};

export default Header;
