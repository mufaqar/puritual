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
  const orderData = {
    payment_method,
    payment_method_title,
    set_paid,
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
    shipping_lines: [
      {
        method_id: "flat_rate",
        method_title: "Standard Shipping",
        total: "250",
      },
    ],
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
