import React from "react";
import SquareButton from "../ui/square-button";
import Image from "next/image";

const SideCartMeta = ({ data }: any) => {
  console.log("🚀 ~ SideCartMeta ~ data:", data);
  return (
    <div>
      <div>
        {data?.items?.map((item: any, idx: any) => (
          <div key={idx} className="flex">
            <figure className="border border-secoundry w-[55px] p-4">
              <Image
                src={item?.images?.[0]?.src}
                alt=""
                width={20}
                height={20}
              />
            </figure>
            <div>
              <h6>{item?.name}</h6>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h5 className="text-4xl font-cervo uppercase font-medium">
          Amount: <span className="text-secoundry">${data?.totalPrice}</span>
        </h5>
      </div>
      <div className="mt-5 flex gap-4">
        <SquareButton>
          <p className="px-6 py-2 font-cervo text-xl">Place an order</p>
        </SquareButton>
        <SquareButton>
          <p className="px-6 py-2 font-cervo text-xl bg-white hover:bg-secoundry">
            Continue Shopping
          </p>
        </SquareButton>
      </div>
    </div>
  );
};

export default SideCartMeta;
