"use client"
import React from "react";
import SquareButton from "../ui/square-button";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { closeCart } from "@/redux/features/side-cart-slice";

const CartStats = ({ cart }: any) => {
  const dispatch = useDispatch<any>();
  return (
    <>
      <div className="mt-4">
        <h5 className="text-4xl font-cervo uppercase text-dark font-medium">
          Total Quantity:
          <span className="text-secoundry ml-3">{cart?.totalQuantity}</span>
        </h5>
        <h5 className="text-4xl font-cervo uppercase text-dark font-medium">
          Amount:
          <span className="text-secoundry ml-3">
            ${cart?.totalPrice?.toFixed(2)}
          </span>
        </h5>
      </div>
      <div className="mt-5 flex gap-4">
        <Link href="/checkout">
          <SquareButton onClick={()=>dispatch(closeCart())}>
            <p className="px-6 py-2 font-cervo text-xl">Place an order</p>
          </SquareButton>
        </Link>
        <SquareButton>
          <p className="px-6 py-2 font-cervo text-xl bg-white hover:bg-secoundry">
            Continue Shopping
          </p>
        </SquareButton>
      </div>
    </>
  );
};

export default CartStats;
