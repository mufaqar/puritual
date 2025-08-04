"use client"
import React from "react";
import { useDispatch } from "react-redux";
import { closeCart } from "@/redux/features/side-cart-slice";
import SquareButton from "../ui/square-button";

const CartStats = ({ cart }: any) => {
  const dispatch = useDispatch<any>();
  return (
    <>
      <div className="mt-4">
        <h5 className="text-4xl uppercase text-dark font-medium">
          Total Quantity:
          <span className="text-secoundry ml-3">{cart?.totalQuantity}</span>
        </h5>
        <h5 className="text-4xl uppercase text-dark font-medium">
          Amount:
          <span className="text-secoundry ml-3">
            Rs{cart?.totalPrice?.toFixed(2)}
          </span>
        </h5>
      </div>
      <div className="mt-5 flex gap-4">
        <SquareButton link="/checkout"
          onClick={() => dispatch(closeCart())} Custom_class="w-1/2 md:text-lg text-sm">
          <span>Place an order</span>
        </SquareButton>
        <SquareButton link="catalog" Custom_class="w-1/2 md:text-lg text-sm">
          <span>
            Continue Shopping
          </span>
        </SquareButton>
      </div>
    </>
  );
};

export default CartStats;
