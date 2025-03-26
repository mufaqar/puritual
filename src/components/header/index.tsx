import React from "react";
import Logo from "./logo";
import CartButton from "./cart-button";
import SquareButton from "../ui/square-button";
import Menu from "./menu";
import SideCartBar from "../side-cart-bar/side-cart-bar";

const Header = () => {
  return (
    <>
      <header className="md:py-5 py-2 flex justify-between border-b border-[#70707011] items-center px-4 md:px-10 fixed w-full z-[1000]">
        <Logo />
        <div className="flex gap-2.5">
          <CartButton/>
          <SquareButton className="hidden md:block">
            <p className="uppercase flex h-full p-2 px-[21px] pt-4 justify-center items-center text-center">Products</p>
          </SquareButton>
          <Menu/>
        </div>
      </header>
      <SideCartBar/>
    </>
  );
};

export default Header;
