"use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/redux/features/side-cart-slice";

const CartButton = ({small}:any) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state: any) => state?.cart?.totalQuantity);

  const handleCart = () => {
    dispatch(toggleCart())
  }

  return (
    <>
        <div onClick={handleCart}  className="grid grid-cols-2 justify-center items-center py-1 divide-x divide-dark border border-dark">
          <span className="md:w-[86px] md:h-[71px] w-[46px] h-[46px] flex items-center justify-center">
            <svg className="w-4 h-5 md:w-[25px] md:h-[36px]" viewBox="0 0 38.108 53.352">
            <path
              id="svgexport-2"
              d="M11.372,16.493V8.872A7.622,7.622,0,0,1,22.8,2.271a7.622,7.622,0,0,1,11.433,6.6v7.622h1.905a5.716,5.716,0,0,1,5.716,5.716V46.98A7.621,7.621,0,0,1,34.237,54.6H11.372A7.621,7.621,0,0,1,3.75,46.98V22.21a5.716,5.716,0,0,1,5.716-5.716Zm3.811-7.622v7.622H22.8V8.872a3.811,3.811,0,1,0-7.622,0ZM34.237,50.791a3.811,3.811,0,0,0,3.811-3.811V22.21A1.906,1.906,0,0,0,36.142,20.3H30.426V46.98a3.811,3.811,0,0,0,3.811,3.811ZM26.615,20.3H9.466A1.905,1.905,0,0,0,7.561,22.21V46.98a3.811,3.811,0,0,0,3.811,3.811H27.636a7.583,7.583,0,0,1-1.021-3.811Zm0-11.433v7.622h3.811V8.872a3.811,3.811,0,0,0-4.764-3.693A7.563,7.563,0,0,1,26.615,8.872Z"
              transform="translate(-3.75 -1.25)"
              fill="#25330A"
            />
          </svg>
          </span>
          <span className="font-axiforma md:w-[86px] md:h-[71px] w-[46px] h-[46px] flex items-center justify-center md:text-4xl md:leading-[36px] text-2xl">{totalQuantity}</span>
        </div>
    </>
  );
};

export default CartButton;
