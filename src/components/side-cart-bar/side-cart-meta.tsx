import React from "react";
import SquareButton from "../ui/square-button";
import Image from "next/image";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
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
          <figure className="border border-secoundry w-[95px] flex justify-center p-4">
            <Image src={item?.images?.[0]?.src} alt="" width={20} height={20} />
          </figure>
          <div className="flex-1">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h6 className="font-cervo text-2xl text-secoundry">
                  {item?.name}
                </h6>
                <p className="text-xs text-gray-400">Serving weight: 80g</p>
              </div>
              <button
                className="text-red-500 mt-3 cursor-pointer"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <RiDeleteBin6Fill />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-2 pb-1.5">
              <SquareButton
                onClick={() => dispatch(decrementQuantity(item.id))}
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <TfiLayoutLineSolid />
                </div>
              </SquareButton>
              <SquareButton>
                <div className="w-8 h-8 flex justify-center items-center pt-1">
                  {item?.quantity}
                </div>
              </SquareButton>
              <SquareButton
                onClick={() => dispatch(incrementQuantity(item.id))}
              >
                <div className="w-8 h-8 flex justify-center items-center">
                  <LiaPlusSolid />
                </div>
              </SquareButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideCartMeta;
