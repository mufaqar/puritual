import React from "react";
import Marquee from "react-fast-marquee";
import SingleCart from "./single-cart";
import bg from "../../../public/images/single-banner.png";
import Image from "next/image";
import RelatedProducts from "./related-products";

const ProductTemplate = ({ product, meta }: any) => {
  //console.log("🚀 ~ ProductTemplate ~ meta:", meta)
  return (
    <>
      <main
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="h-screen flex items-center rotate-[-3deg] scale-105">
          <Marquee autoFill className="overflow-hidden " speed={100}>
            <div className="flex gap-1 text-nowrap md:leading-[150px] h-[300px] leading-[80px] text-[80px] md:text-[157px] uppercase mr-1 items-center font-cervo">
              <p className="text-white font-medium">LUXURY MEETS FUN</p>
              <p className="text-stroke-white">ORGANIC PRODUCTS</p>
            </div>
          </Marquee>
        </div>
        <SingleCart product={product} />
      </main>
      <section className="bg-primary py-4">
        <div className="max-w-[1480px] grid md:grid-cols-2 gap-4 mx-auto px-3">
          <div>
            <div className="bg-white rounded-[20px] p-12 text-4xl font-cervo text-secoundry">
              <p>
                {meta?.acf?.sub_title}
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-12 mt-4">
              <h4 className="uppercase text-3xl font-cervo text-secoundry">
                Composition:
              </h4>
              <div className="text-sm text-dark mt-3">
                <div dangerouslySetInnerHTML={{__html: meta?.excerpt?.rendered}}/>
              </div>
              <h4 className="uppercase text-3xl font-cervo text-secoundry mt-10">
                Energy value:
              </h4>
              <div className="text-sm text-dark mt-3">
                {meta?.acf?.listing?.map((item: any, idx: number) => (
                  <p key={idx} className="flex justify-between gap-4 items-center py-1">
                    <span>{item?.title}</span>
                    <span>
                      {item?.value} <sub>{item?.prefix}</sub>
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Image
              src={bg.src}
              alt=""
              width={600}
              height={600}
              className="rounded-[20px] h-full w-full object-center object-cover"
            />
          </div>
        </div>
      </section>

      <RelatedProducts />
    </>
  );
};

export default ProductTemplate;
