
import Review from "@/components/Reviews/Review";
import WooCommerce from "@/lib/woocommerce"
import OurProducts from "@/templates/home-page/our-products";
import Logo from "@/templates/logo/logo";

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
      <section className="md:py-[180px] py-16 bg-[url('/images/catalog.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="container mx-auto px-4 flex md:flex-row flex-col justify-between items-center">
         <div className="max-w-[592px]">
            <h1 className="md:text-[100px] md:leading-[100px] text-6xl font-normal text-dark">
              Our handwash is designed to outperform ordinary gel washes
            </h1>
          </div>
          <div className="max-w-[450px]">
            <p className="md:text-[26px] md:leading-[40px] text-lg font-normal text-dark text-right">
              Nourish with Vitamin E and Aloe Vera<br/> Pump Dispenses Rich Foam, Not Gel <br/>2x More Washes Per Bottle <br/>No Drips, No Waste <br/>Smells Amazing
            </p>
          </div>
        </div>
      </section>
      <Logo />
      <OurProducts products={products.data} />
      <Review />
    </>
  );
}
