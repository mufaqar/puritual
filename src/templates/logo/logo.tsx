import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <section className="bg-dark py-14 border-y border-[#dcefb242]">
      <div className="container mx-auto px-3">
        <Image
          src="/images/moving-ribbon.gif"
          alt="premium"
          width={1920}
          height={400}
          className=""
        />
      </div>
    </section>
  );
}

export default Logo;
