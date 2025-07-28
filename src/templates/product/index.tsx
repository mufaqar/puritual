import React from "react";
import Marquee from "react-fast-marquee";
import SingleCart from "./single-cart";
import bg from "../../../public/images/single-banner.png";
import Image from "next/image";
import RelatedProducts from "./related-products";
import Logo from "../logo/logo";
import Review from "@/components/Reviews/Review";

// Types
interface MetaListingItem {
  title: string;
  value: string;
  prefix?: string;
}

interface MetaData {
  acf: {
    sub_title: string;
    listing: MetaListingItem[];
  };
  excerpt: {
    rendered: string;
  };
}

interface ProductData {
  id: number;
  name: string;
  price: string;

}

interface ProductTemplateProps {
  product: ProductData;
  meta: MetaData;
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, meta }) => {
  return (
    <>
      <section className="bg-primary">
        <div className="flex md:flex-row flex-col gap-6 items-center">
          <div className="md:w-1/3 w-full">
            <Image
              src="/images/pro_main.png"
              alt="pro_main"
              width={800}
              height={1000}
              className="h-full"
            />
          </div>
          <div className="md:w-2/3 w-full md:px-8 px-4">
            <h1 className="md:text-[100px] md:leading-[100px] text-6xl font-normal text-dark">
              A GENTLE CLEANSE INSPIRED BY FOREST SPRING AND SEA
            </h1>
            <p className="md:text-4xl text-2xl font-normal text-dark uppercase mt-4">
              BREEZY PEAKS
            </p>
          </div>
        </div>
      </section>
       <Logo />
      <section className="bg-primary py-4">
        <div className="max-w-[1480px] grid md:grid-cols-2 gap-4 mx-auto px-3">
          <div>
            <div className="bg-white rounded-[20px] p-12 text-4xl font-cervo text-secoundry">
              <p>{meta?.acf?.sub_title}</p>
            </div>

            <div className="bg-white rounded-[20px] p-12 mt-4">
              <h4 className="uppercase text-3xl font-cervo text-secoundry">
                Composition:
              </h4>
              <div className="text-sm text-dark mt-3">
                <div
                  dangerouslySetInnerHTML={{ __html: meta?.excerpt?.rendered }}
                />
              </div>

              <h4 className="uppercase text-3xl font-cervo text-secoundry mt-10">
                Energy value:
              </h4>
              <div className="text-sm text-dark mt-3">
                {meta?.acf?.listing?.map((item, idx) => (
                  <p
                    key={idx}
                    className="flex justify-between gap-4 items-center py-1"
                  >
                    <span>{item.title}</span>
                    <span>
                      {item.value} <sub>{item.prefix}</sub>
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
<Review />
      <RelatedProducts />
    </>
  );
};

export default ProductTemplate;
