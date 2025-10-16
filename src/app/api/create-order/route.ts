import WooCommerce from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const line_items = data?.cart?.items?.map((item: any) => {
    return {
      product_id: item?.id,
      quantity: item?.quantity,
    };
  });

   // 🧾 Handle Coupon (if any)
    const coupon_lines =
      data?.formData?.coupon_code && data?.formData?.coupon_code.trim() !== ""
        ? [
            {
              code: data.formData.coupon_code, // must match Woo coupon code
            },
          ]
        : [];

  // Payment logic
  let payment_method = "credit_card";
  let payment_method_title = "Credit Card";
  let set_paid = true;

  if (data?.formData?.payment_method === "cod") {
    payment_method = "cod";
    payment_method_title = "Cash on Delivery";
    set_paid = false;
  } else if (data?.formData?.payment_method === "credit_card") {
    payment_method = "credit_card";
    payment_method_title = "Credit Card";
    set_paid = false;
  }

    // ✅ Dynamically assign shipping cost (from frontend)
  const shippingCost = data?.shipping_cost ?? 250;
  const orderData = {
    payment_method,
    payment_method_title,
    set_paid,
    status: "processing",
    billing: {
      first_name: data?.formData?.your_name,
      last_name: "",
      address_1: data?.formData?.address,
      city: data?.formData?.city,
      postcode: data?.formData?.postcode,
      country: data?.formData?.country,
      email: data?.formData?.your_email,
      phone: data?.formData?.phone_number,
    },
    shipping: {
      first_name: data?.formData?.your_name,
      last_name: "",
      address_1: data?.formData?.address,
      city: data?.formData?.city,
      postcode: data?.formData?.postcode,
      country: data?.formData?.country,
    },

    line_items,
    // ✅ Use dynamic shipping total
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title:
          shippingCost === 0 ? "Free Shipping" : "Standard Shipping",
        total: shippingCost.toString(),
      },
    ],
     // ✅ Add coupon line if exists
      coupon_lines,
  };

  try {
    const response = await WooCommerce.post("orders", orderData);
    const orderId = response.data.id;
    return new NextResponse(
      JSON.stringify({
        status: "success",
        message: "Order Created",
        orderData,
        orderId,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        status: "Error",
        message: "error",
        error,
      }),
      { status: 401 }
    );
  }
}
