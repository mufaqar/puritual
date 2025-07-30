import React from "react";
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
    description: string;
    listing: MetaListingItem[];
  };
  excerpt: {
    rendered: string;
  };
}

interface ProductImage {
  id: number;
  src: string;
  alt: string;
  [key: string]: any;
}


interface ProductData {
  id: number;
  name: string;
  price: string;
  short_description: string;
  images: ProductImage[];
}

interface ProductTemplateProps {
  product: ProductData;
  meta: MetaData;
}




const ProductTemplate: React.FC<ProductTemplateProps> = ({ product, meta }) => {
 

   const listing = meta.acf.listing;
   const sub_title = meta.acf.sub_title;
   const images = product.images;

   


    


  return (
    <>
      {/* Banner Section */}
      <section className="bg-primary relative">
        <div className="flex md:flex-row flex-col gap-6 items-center">
          <div className="md:w-1/3 w-full h-full">
            <Image
              src="/images/pro_main.png"
              alt="pro_main"
              width={800}
              height={1500}
              className="h-full w-full"
            />
          </div>
          <div className="md:w-2/3 w-full md:px-8 px-4">
            <h1
                className="md:text-[100px] md:leading-[100px] text-6xl font-normal text-dark"
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
            <p className="md:text-4xl text-2xl font-normal text-dark uppercase mt-4 mb-5">
              {product.name}
            </p>
            <SingleCart product={product} />
          </div>
        </div>
      </section>

      <Logo />

      {/* Product Info Section */}
      <section className="bg-dark md:py-[100px] py-16 px-8">
        <div className="container bg-primary flex md:flex-row flex-col-reverse items-center md:gap-10 gap-4 mx-auto px-4 border-[10px] border-[#339933] rounded-[20px] md:px-8 md:py-10 py-5 relative">
          <div className="md:w-1/3 w-full">
            <Image
              src="/images/pro_cart.png"
              alt="pro_cart"
              width={700}
              height={700}
            />
            <div className="relative w-[200px] h-[200px] mt-[-90px]">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Define a circular path */}
                  <path
                    id="text-circle"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text fill="#25330A" fontSize="19" fontFamily="">
                  <textPath href="#text-circle" startOffset="50%" textAnchor="start">
                    NATURAL INGREDIENTS!
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <div className=" flex md:flex-row flex-col-reverse md:gap-2 gap-5 mb-5">
              <div className="md:w-fit w-full space-y-5">
                <h3 className="md:text-[50px] md:leading-[50px] text-3xl font-normal text-dark uppercase">
                    {product.name}
                </h3>

                {/* FAQs List */}
                {listing.map((item, idx) => (
                  <div key={idx} className="mb-6">
                    <h4 className="md:text-3xl text-xl font-normal text-dark mb-2.5 flex items-center justify-between gap-5">
                      <span>{item.title}</span> <FaPlus className="text-xl" />
                    </h4>
                    <p
                      className="md:text-xl text-lg font-normal text-dark"
                      dangerouslySetInnerHTML={{ __html: item.value }}
                    />
                  </div>
                ))}
              </div>
              <div className="md:min-w-[217px] md:h-[217px] w-[217px] h-[217px] rounded-full border border-secoundry flex flex-col items-center justify-center relative before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:rounded-full before:border before:border-secoundry before:-top-2 before:left-0">
                <p className="text-xs font-normal text-dark text-center">
                  Enriched With
                </p>
                <p className="md:text-3xl text-xl font-medium text-dark text-center">
                 {sub_title}
                </p>
              </div>
            </div>
            <SingleCart product={product} />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-8 items-center">
         {images.map((item, idx) => (
        <div key={idx} className="mb-6">
          <Image
               src={item.src}
              alt="gallery1"
              width={500}
              height={500}
              className="rounded-full"
            />
        </div>
      ))}
          <div>
            
          </div>
        </div>
      </section>

      <Review />
      <RelatedProducts />
    </>
  );
};

export default ProductTemplate;
