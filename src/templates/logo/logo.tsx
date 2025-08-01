import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <section className="bg-dark md:py-[140px] py-14 border-y border-[#dcefb242]">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col gap-5 justify-between items-center ">
          <Image
            src="/images/premium.svg"
            alt="premium"
            width={200}
            height={100}
            className=" "
          />
          <Image
            src="/images/circle.svg"
            alt="circle"
            width={80}
            height={80}
            className=" "
          />
          <Image
            src="/images/delightful.svg"
            alt="delightful"
            width={200}
            height={100}
            className=" "
          />
          <Image
            src="/images/circle.svg"
            alt="circle"
            width={80}
            height={80}
            className=" "
          />
          <Image
            src="/images/vitamin.svg"
            alt="vitamin"
            width={200}
            height={100}
            className=" "
          />         
        </div>
      </div>
    </section>
  );
}

export default Logo;
