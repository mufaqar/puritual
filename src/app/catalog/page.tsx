
import WooCommerce from "@/lib/woocommerce"
import OurProducts from "@/templates/home-page/our-products";

async function getData() {
  const response = await WooCommerce.get("products",{
    per_page: 20,
  });
  return response
}

export default async function Home() {
  const products = await getData()
  
  return (
    <div className="bg-primary pt-20">
      <OurProducts products={products.data}/>
    </div>
  );
}
