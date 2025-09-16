
import AllReviews from "@/components/Reviews/FetchReviews";
import WooCommerce from "@/lib/woocommerce"
import OurProducts from "@/templates/home-page/our-products";
import Logo from "@/templates/logo/logo";
import Image from "next/image";

async function getData() {
  const response = await WooCommerce.get("products", {
    per_page: 20,
  });
  return response
}

export default async function Home() {
  const products = await getData()

  return (
    <>
      <section className="md:py-[180px] py-20 md:bg-[url('/images/catalog.jpg')] bg-center bg-cover bg-no-repeat bg-blend-overlay md:bg-transparent bg-primary">
        <div className="container mx-auto px-4 md:hidden block h-[320px] mb-5">
          <Image
            src="/images/catalog.jpg" // Replace with your image path
            alt="catalog"
            width={1920}
            height={1000}
            className="drop-shadow-xl object-cover object-center h-full w-full"
          />
        </div>
        <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between items-center gap-5">
          <div className="max-w-[592px]">
            <h1 className="md:text-[100px] md:leading-[100px] text-3xl font-normal text-dark">
              Our handwash is designed to outperform ordinary gel washes
            </h1>
          </div>
          <div className="max-w-[450px] md:w-fit w-full flex items-start gap-2.5">
            <Image
              src="/images/circle.svg"
              alt="circle"
              width={80}
              height={80}
              className="md:w-auto w-[40px] md:hidden block"
            />
            <p className="md:text-[26px] md:leading-[40px] text-base font-normal text-dark md:text-right">
              Nourish with Vitamin E and Aloe Vera<br /> Pump Dispenses Rich Foam, Not Gel <br />2x More Washes Per Bottle <br />No Drips, No Waste <br />Smells Amazing
            </p>
          </div>
        </div>
      </section>
      <Logo />
      <OurProducts products={products.data} />
      <AllReviews />
    </>
  );
}
