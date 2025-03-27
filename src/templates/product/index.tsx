import React from "react";
import Marquee from "react-fast-marquee";
import SingleCart from "./single-cart";
import bg from "../../../public/images/single-banner.png";
import Image from "next/image";
import RelatedProducts from "./related-products";

const ProductTemplate = ({ product }: any) => {
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
                Farmer's cheese, grated until smooth and covered in Belgian dark
                chocolate. The only product that should be thawed before eating.{" "}
              </p>
            </div>
            <div className="bg-white rounded-[20px] p-12 mt-4">
              <h4 className="uppercase text-3xl font-cervo text-secoundry">
                Composition:
              </h4>
              <p className="text-sm text-dark mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                earum illo reiciendis expedita! Commodi inventore porro quis
                necessitatibus officia quidem.
              </p>
              <h4 className="uppercase text-3xl font-cervo text-secoundry mt-10">
                Energy value:
              </h4>
              <div className="text-sm text-dark mt-3">
                <p className="flex justify-between gap-4 items-center py-1">
                  <span>Proteins</span>
                  <span>
                    9.30 <sub>g</sub>
                  </span>
                </p>
                <p className="flex justify-between gap-4 items-center py-1">
                  <span>Jury</span>
                  <span>
                  10.28 <sub>g</sub>
                  </span>
                </p>
                <p className="flex justify-between gap-4 items-center py-1">
                  <span>Carbohydrates</span>
                  <span>
                  19.05 <sub>g</sub>
                  </span>
                </p>
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

      <RelatedProducts/>
    </>
  );
};

export default ProductTemplate;
