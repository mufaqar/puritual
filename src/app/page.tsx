import HomePage from "@/templates/home-page";
import WooCommerce from "@/lib/woocommerce"

async function getData() {
  const response = await WooCommerce.get("products",{
    per_page: 8,
  });
  return response
}

export default async function Home() {
  const products = await getData()
  
  return (
    <div className="">
      <HomePage products={products.data}/>
    </div>
  );
}
