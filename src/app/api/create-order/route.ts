import WooCommerce from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const line_items = data?.cart?.items?.map((item: any) => ({
    product_id: item?.id,
    quantity: item?.quantity,
  }));

  const shippingCost = data?.shipping_cost ?? 250;
  const discountAmount = data?.discount_amount ?? 0;

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

  // ✅ Coupon lines (only if coupon applied)
  const coupon_lines =
    data?.formData?.coupon_code && data?.formData?.coupon_code.trim() !== ""
      ? [
          {
            code: data.formData.coupon_code,
            discount: discountAmount.toString(),
          },
        ]
      : [];

  const orderData = {
    payment_method,
    payment_method_title,
    set_paid,
    status: "processing",
    billing: {
      first_name: data?.formData?.your_name,
      address_1: data?.formData?.address,
      city: data?.formData?.city,
      postcode: data?.formData?.postcode,
      country: data?.formData?.country,
      email: data?.formData?.your_email,
      phone: data?.formData?.phone_number,
    },
    shipping: {
      first_name: data?.formData?.your_name,
      address_1: data?.formData?.address,
      city: data?.formData?.city,
      postcode: data?.formData?.postcode,
      country: data?.formData?.country,
    },
    line_items,
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: shippingCost === 0 ? "Free Shipping" : "Standard Shipping",
        total: shippingCost.toString(),
      },
    ],
    coupon_lines,
  };

  try {
    const response = await WooCommerce.post("orders", orderData);
    const orderId = response.data.id;
    return NextResponse.json(
      {
        status: "success",
        message: "Order created successfully",
        orderId,
        orderData,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Order error:", error.response?.data || error);
    return NextResponse.json(
      { status: "error", message: "Failed to create order", error },
      { status: 500 }
    );
  }
}
