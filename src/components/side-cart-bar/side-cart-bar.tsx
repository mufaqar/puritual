"use client";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import SquareButton from "../ui/square-button";
import { RxCross2 } from "react-icons/rx";
import CartButton from "../header/cart-button";
import { closeCart, toggleCart } from "@/redux/features/side-cart-slice";
import SideCartMeta from "./side-cart-meta";
import CartStats from "./cart-stats";

const SideCartBar = () => {
  const isOpen = useSelector((state: any) => state.sideCart.isOpen);
  const cart = useSelector((state: any) => state?.cart);
  const dispatch = useDispatch<any>();
  const sideCartRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(sideCartRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(sideCartRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={sideCartRef}
        className="z-[1000] fixed top-0 bottom-0 right-0 max-w-[460px] w-full bg-white shadow-lg px-7 py-5"
        style={{ transform: "translateX(100%)" }} // Initial position off-screen
      >
        <div className="flex justify-end items-center">
          <CartButton small />
          <SquareButton onClick={() => dispatch(closeCart())}>
            <div className="text-3xl text-dark p-1">
              <RxCross2 />
            </div>
          </SquareButton>
        </div>
        {/* Cart Items  */}
        <div className="h-[calc(100vh-280px)] overflow-y-auto mt-4">
          {cart?.items?.length > 0 ? (
            <SideCartMeta data={cart} />
          ) : (
            <EmptyCartMessage />
          )}
        </div>
        {cart?.items?.length > 0 && <CartStats cart={cart} />}
      </div>
    </>
  );
};

export default SideCartBar;

const EmptyCartMessage = () => {
  return (
    <div className="font-cervo mt-10 text-2xl text-dark">
      Your Cart has no item!
    </div>
  );
};
