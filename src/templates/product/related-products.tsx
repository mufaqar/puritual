// components/RelatedProducts.tsx (Server Component)
import ProductLayout from "@/components/product-layout";
import WooCommerce from "@/lib/woocommerce";

const colors = ["border-[#663399]", "border-[#CC6633]", "border-[#CC3366]"];

async function getRelatedProducts(productId: number) {
  const res = await WooCommerce.get(`products/${productId}`);
  const relatedIds = res.data?.related_ids || [];

  if (relatedIds.length === 0) return [];

  const relatedRes = await WooCommerce.get("products", {
    include: relatedIds.join(","),
  });

  const products = relatedRes.data.filter((p: any) => p.id !== productId);
  return products.slice(0, 3);
}

export default async function RelatedProducts({ productId }: { productId: number }) {
  const products = await getRelatedProducts(productId);

  return (
    <section className="bg-dark py-10 md:py-[120px]">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-[60px] md:text-[150px] z-[1] mb-10 relative mx-auto text-primary font-Melodrama font-normal capitalize leading-[110px]">
          Worth a try
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-[70px] gap-3">
          {products.map((product: any, idx: number) => (
            <div key={product.id}>
              <ProductLayout
                product={product}
                BorderColor={colors[idx % colors.length]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
