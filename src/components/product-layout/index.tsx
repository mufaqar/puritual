"use client";
import { addInCart } from "@/redux/features/add-to-cart-slice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import CircleButton from "../ui/circle-button";

const ProductLayout = ({ product }: any) => {
 // console.log("🚀 ~ ProductLayout ~ product:", product);
  const product_color = product.acf.product_color;
  // console.log("🚀 ~ ProductLayout ~ product:", product_color);
  const dispatch = useDispatch();

  return (
    <div
  className="border-4 bg-primary rounded-[20px] flex justify-start hover:bg-green-50 group flex-col items-center p-5 h-full product_box"
  style={{ borderColor: product_color }}
>
      <figure className="h-[450px] w-full">
        <Image
          src={product?.images?.[0]?.src}
          alt=""
          width={450}
          height={450}
          className="h-full w-full object-cover rounded-[20px]"
        />
      </figure>
      <div className="flex justify-between items-start gap-4 min-h-[190px] w-full mt-3.5">
        <div>
          <h6 className="md:text-[46px] md:leading-[50px] text-[28px] uppercase text-black font-normal">
            {product?.name}
          </h6>
          <p className="text-black md:text-2xl text-lg font-axiforma mb-5">
            Premium Hand Wash
          </p>
          <Link
            href={`/product/${product?.slug}`}
            className="md:text-2xl text-base italic font-normal text-black group-hover:text-secoundry tracking-normal flex gap-4 items-center transition-all duration-300 ease-in-out"
          >
            LEARN MORE
            <FaChevronRight className="text-secoundry group-hover:text-black transition-all duration-300 ease-in-out" />
          </Link>
        </div>
        <div>
          <p className="md:text-[25px] text-lg font-normal text-black font-cervo">
            Rs {product?.price}
          </p>
          <CircleButton
            className="light_bubble bg-secoundry ml-auto"
            BgHovr="bg-dark"
          >
            <Link
            href={`/product/${product?.slug}`} className="z-10 relative">
            <svg              
              className="z-10 fill-dark group-hover:fill-amber-50 md:h-[53px] md:w-[38px] h-[38px] w-[23px]"
              viewBox="0 0 38.108 53.352"
            >
              <path
                id="svgexport-2"
                d="M11.372,16.493V8.872A7.622,7.622,0,0,1,22.8,2.271a7.622,7.622,0,0,1,11.433,6.6v7.622h1.905a5.716,5.716,0,0,1,5.716,5.716V46.98A7.621,7.621,0,0,1,34.237,54.6H11.372A7.621,7.621,0,0,1,3.75,46.98V22.21a5.716,5.716,0,0,1,5.716-5.716Zm3.811-7.622v7.622H22.8V8.872a3.811,3.811,0,1,0-7.622,0ZM34.237,50.791a3.811,3.811,0,0,0,3.811-3.811V22.21A1.906,1.906,0,0,0,36.142,20.3H30.426V46.98a3.811,3.811,0,0,0,3.811,3.811ZM26.615,20.3H9.466A1.905,1.905,0,0,0,7.561,22.21V46.98a3.811,3.811,0,0,0,3.811,3.811H27.636a7.583,7.583,0,0,1-1.021-3.811Zm0-11.433v7.622h3.811V8.872a3.811,3.811,0,0,0-4.764-3.693A7.563,7.563,0,0,1,26.615,8.872Z"
                transform="translate(-3.75 -1.25)"
                fill="current"
              />
            </svg>
            </Link>
          </CircleButton>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
