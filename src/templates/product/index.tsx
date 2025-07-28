import React from "react";
import Marquee from "react-fast-marquee";
import SingleCart from "./single-cart";
import Image from "next/image";
import RelatedProducts from "./related-products";
import Logo from "../logo/logo";
import Review from "@/components/Reviews/Review";
import { FaPlus } from "react-icons/fa";

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

const faqs = [
  {
    question: "PRODUCT DETAIL",
    answer: `260ml / 8.79 fl. oz.<br />Ingredients : Based on each variant`,
  },
  {
    question: "FRAGRANCE",
    answer: `Forest, Spring, Sea Breeze`,
  },
  {
    question: "BENEFITS",
    answer: `Gently cleanses and refreshes while leaving your hands soft, nourished, and delicately scented.`,
  },
  {
    question: "WHY YOU WILL LOVE IT",
    answer: `Infused with Vitamin E and Aloe.<br />Light, luxurious foam.`,
  },
];


const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, meta }) => {
  return (
    <>
      {/* Banner Section */}
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

      {/* Product Info Section */}
      <section className="bg-primary py-16 px-5">
        <div className="container flex md:flex-row flex-col gap-4 mx-auto px-4">
          <div className="md:w-1/3 w-full">
            <Image
              src="/images/pro_cart.png"
              alt="pro_cart"
              width={700}
              height={700}
            />
          </div>
          <div className="md:w-2/3 w-full space-y-5">
            <h3 className="md:text-[50px] md:leading-[50px] text-3xl font-normal text-dark uppercase">
              BREEZY PEAKS
            </h3>

            {/* FAQs List */}
            {faqs.map((faq, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="md:text-3xl text-xl font-normal text-dark mb-2.5 flex items-center justify-between gap-5">
                  <span>{faq.question}</span> <FaPlus className="text-xl" />
                </h4>
                <p
                  className="md:text-2xl text-lg font-normal text-dark"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-8 items-center">
          <div>
            <Image
              src="/images/gallery3.png"
              alt="gallery3"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
          <div>
            <Image
              src="/images/gallery2.png"
              alt="gallery2"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
          <div>
            <Image
              src="/images/gallery1.png"
              alt="gallery1"
              width={500}
              height={500}
              className="rounded-full"
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
