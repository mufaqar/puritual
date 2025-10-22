import React from "react";
import SingleCart from "./single-cart";
import Image from "next/image";
import RelatedProducts from "./related-products";
import Logo from "../logo/logo";
import Review from "@/components/Reviews/Review";
import ProductFeatures from "@/components/product-layout/ProductFeatures";
import ProductGallery from "@/components/product-layout/ProductGallery";
import WooPixelEvents from "@/components/Tracking/WooPixelEvents";

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
    banner_image: string;
    enriched_image: string;
    product_enriched: string;
    product_color: string;
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
  const banner_image = meta.acf.banner_image;
  const enriched_image = meta.acf.enriched_image;
  const product_color = meta.acf.product_color;
  //  console.log(product);
  //  console.log(images[0].src);

  return (
    <>
      {/* Banner Section */}
      <WooPixelEvents product={product} />
      <section className="bg-primary relative">
        <div className="flex md:flex-row flex-col gap-6 items-center">
          <div className="md:w-1/3 w-full h-full">
            <Image
              src={banner_image}
              alt="pro_main"
              width={800}
              height={1500}
              className="h-full w-full"
            />
          </div>
          <div className="md:w-2/3 w-full md:px-8 px-4 ">
            <h1
              className="md:text-4xl lg:text-6xl xl:text-7xl text-3xl font-normal text-dark flex gap-2"
              dangerouslySetInnerHTML={{
                __html: '"' + product.short_description,
              }}
            />
            <p className="md:text-2xl lg:text-4xl text-xl font-normal text-dark uppercase mt-4 mb-5 pl-4">
              {product.name}
            </p>
            <div className="md:block hidden">
              <SingleCart product={product} />
            </div>
          </div>
        </div>
      </section>

      <Logo />

      {/* Product Info Section */}
      <section className="bg-dark md:py-[100px] py-16 md:px-8 px-3">
        <div
          className="container bg-primary flex md:flex-row flex-col items-center md:gap-10 gap-4 mx-auto px-4 border-[10px] rounded-[20px] md:px-8 md:py-10 py-5 relative"
          style={{ borderColor: product_color }}
        >
          <div className="md:w-1/3 w-full">
            <Image
              src={enriched_image}
              alt="enriched_image"
              width={700}
              height={700}
              className=""
            />
            <div className="relative w-[200px] h-[200px] mt-[-90px]">
              <Image
                src="/images/natural_circle.png"
                alt="Scroll Circle"
                width={1334}
                height={1334}
                className="animate-rotate-smooth"
              />
            </div>
          </div>
          <div className="md:w-2/3 w-full">
            <div className=" flex md:flex-row flex-col-reverse md:gap-2 gap-5 mb-5">
              <div className="md:w-fit w-full space-y-5">
                <h3 className="md:text-[40px] md:leading-[50px] text-3xl font-normal text-dark uppercase">
                  {product.name}
                </h3>

                <ProductFeatures listing={listing} />
              </div>
              <div className="md:min-w-[217px] md:h-[217px] w-[217px] h-[217px] rounded-full border border-secoundry md:flex hidden flex-col items-center justify-center relative before:content-[''] before:absolute before:w-[30px] before:h-[30px] before:rounded-full before:border before:border-secoundry before:-top-2 before:left-0">
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
      <ProductGallery images={images} />

      <Review productId={product.id} />
      <RelatedProducts productId={product.id} />
    </>
  );
};

export default ProductTemplate;
