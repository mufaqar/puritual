import React from "react";
import CircleButton from "../ui/circle-button";
import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/features/add-to-cart-slice";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { LiaPlusSolid } from "react-icons/lia";

const SideCartMeta = ({ data }: any) => {
  const dispatch = useDispatch();
  return (
    <div>
      {data?.items?.map((item: any, idx: any) => (
        <div key={idx} className="flex gap-2 mb-2">
          <figure className="border border-secoundry w-[95px] flex justify-center">
            <Image src={item?.images?.[0]?.src} alt="" width={200} height={200} className="object-cover object-center" />
          </figure>
          <div className="flex-1">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h6 className="text-2xl text-dark">
                  {item?.name}
                </h6>
                {/* <p className="text-xs text-dark">Serving weight: 80g</p> */}
              </div>
              <button
                className="text-red-500 mt-3 cursor-pointer"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <RiDeleteBin6Fill />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-2 pb-1.5">
              <CircleButton className="!w-8 !h-8 "
                onClick={() => dispatch(decrementQuantity(item.id))}
              >
                <div className="w-8 h-8 flex justify-center items-center border-dark border rounded-full">
                  <TfiLayoutLineSolid />
                </div>
              </CircleButton>
              <CircleButton className="!w-8 !h-8 ">
                <div className="w-8 h-8 flex justify-center items-center pt-1 border-dark border rounded-full">
                  {item?.quantity}
                </div>
              </CircleButton>
              <CircleButton className="!w-8 !h-8 "
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                <div className="w-8 h-8 flex justify-center items-center border-dark border rounded-full">
                  <LiaPlusSolid />
                </div>
              </CircleButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideCartMeta;
