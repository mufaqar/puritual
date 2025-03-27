"use client";
import SquareButton from "@/components/ui/square-button";
import { addInCart } from "@/redux/features/add-to-cart-slice";
import { openCart } from "@/redux/features/side-cart-slice";
import React, { useState } from "react";
import { LiaPlusSolid } from "react-icons/lia";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { useDispatch } from "react-redux";

const SingleCart = ({ product }:any) => {
  const [cartItem, setCartItem] = useState(1);
  const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addInCart({...product, quantity : cartItem }))
        dispatch(openCart())
    }
  return (
    <>
      <div className="bg-white p-8 ml-8 sm:ml-0 pt-6 flex-col sm:flex-row flex sm:items-end gap-5 md:gap-10 shadow-2xl rounded-[20px] absolute bottom-6 right-6">
        <div>
          <h5 className="font-cervo uppercase text-secoundry text-5xl mb-2 sm:mb-0">
            Product Add into cart
          </h5>
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            <div className="flex items-center gap-3 mt-2 pb-1.5">
              <SquareButton onClick={()=>setCartItem(cartItem <= 0 ? 0 : cartItem-1)}>
                <div className="w-12 h-12 flex text-dark justify-center items-center">
                  <TfiLayoutLineSolid />
                </div>
              </SquareButton>
              <SquareButton>
                <div className="w-12 h-12 flex text-dark justify-center items-center pt-1">
                  {cartItem}
                </div>
              </SquareButton>
              <SquareButton onClick={()=>setCartItem(cartItem+1)}>
                <div className="w-12 h-12 flex text-dark justify-center items-center">
                  <LiaPlusSolid />
                </div>
              </SquareButton>
            </div>
            <SquareButton onClick={handleAddToCart}>
              <div className="w-full px-10 pt-1 h-[50px] text-dark capitalize flex justify-center items-center">
                Add to cart
              </div>
            </SquareButton>
          </div>
        </div>
        <h5 className="font-cervo text-secoundry text-9xl">
          {(Number(product?.price) * cartItem).toFixed(2)}
          <sub className="text-2xl -mt-2">$</sub>
        </h5>
      </div>
    </>
  );
};

export default SingleCart;
