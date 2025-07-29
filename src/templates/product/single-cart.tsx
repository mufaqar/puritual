"use client";
import SquareButton from "@/components/ui/square-button";
import { addInCart } from "@/redux/features/add-to-cart-slice";
import { openCart } from "@/redux/features/side-cart-slice";
import React, { useState } from "react";
import { LiaPlusSolid } from "react-icons/lia";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { useDispatch } from "react-redux";

const SingleCart = ({ product }: any) => {
  const [cartItem, setCartItem] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addInCart({ ...product, quantity: cartItem }))
    dispatch(openCart())
  }
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-end">
        <SquareButton className="dark_bubble bg-dark md:w-[152px] md:h-[152px]" BgHovr="bg-secoundry md:w-[152px] md:h-[152px]">
          <p className="md:text-3xl text-xl font-bold text-primary z-10 group-hover:text-dark">
            {/* Rs {(Number(product?.price) * cartItem).toFixed(2)} */}
            Rs 1200
          </p>
        </SquareButton>
        <div className="flex items-center gap-3 mt-2 pb-1.5">
          <button onClick={() => setCartItem(cartItem <= 0 ? 0 : cartItem - 1)}>
            <div className="md:w-[88px] md:h-[88px] w-12 h-12 flex text-dark hover:text-primary bg-transparent hover:bg-dark justify-center items-center border border-dark rounded-full cursor-pointer md:text-4xl text-xl font-normal transition-all duration-300 ease-linear">
              <TfiLayoutLineSolid />
            </div>
          </button>
          <button>
            <div className="md:w-[88px] md:h-[88px] w-12 h-12 flex text-dark hover:text-primary bg-transparent hover:bg-dark justify-center items-center border border-dark rounded-full cursor-pointer md:text-4xl text-xl font-normal transition-all duration-300 ease-linear pt-1">
              {cartItem}
            </div>
          </button>
          <button onClick={() => setCartItem(cartItem + 1)}>
            <div className="md:w-[88px] md:h-[88px] w-12 h-12 flex text-dark hover:text-primary bg-transparent hover:bg-dark justify-center items-center border border-dark rounded-full cursor-pointer md:text-4xl text-xl font-normal transition-all duration-300 ease-linear">
              <LiaPlusSolid />
            </div>
          </button>
        </div>
        <SquareButton onClick={handleAddToCart} className="light_bubble bg-secoundry md:w-[152px] md:h-[152px]" BgHovr="bg-dark md:w-[152px] md:h-[152px]">
          <svg width="38px" height="53px" className="z-10 fill-dark group-hover:fill-amber-50" viewBox="0 0 38.108 53.352">
            <path
              id="svgexport-2"
              d="M11.372,16.493V8.872A7.622,7.622,0,0,1,22.8,2.271a7.622,7.622,0,0,1,11.433,6.6v7.622h1.905a5.716,5.716,0,0,1,5.716,5.716V46.98A7.621,7.621,0,0,1,34.237,54.6H11.372A7.621,7.621,0,0,1,3.75,46.98V22.21a5.716,5.716,0,0,1,5.716-5.716Zm3.811-7.622v7.622H22.8V8.872a3.811,3.811,0,1,0-7.622,0ZM34.237,50.791a3.811,3.811,0,0,0,3.811-3.811V22.21A1.906,1.906,0,0,0,36.142,20.3H30.426V46.98a3.811,3.811,0,0,0,3.811,3.811ZM26.615,20.3H9.466A1.905,1.905,0,0,0,7.561,22.21V46.98a3.811,3.811,0,0,0,3.811,3.811H27.636a7.583,7.583,0,0,1-1.021-3.811Zm0-11.433v7.622h3.811V8.872a3.811,3.811,0,0,0-4.764-3.693A7.563,7.563,0,0,1,26.615,8.872Z"
              transform="translate(-3.75 -1.25)"
              fill="current"
            />
          </svg>
        </SquareButton>
      </div>
    </>
  );
};

export default SingleCart;
