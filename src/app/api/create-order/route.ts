// app/api/checkout-session/route.ts
import WooCommerce from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json()

  const line_items = data?.cart?.items?.map((item: any) => {
    return {
      product_id: item?.id,
      quantity: item?.quantity
    }
  })

  const orderData = {
    payment_method: data?.formData?.payment_method === 'pay-on-delivery' ? 'cod' : 'bacs',
    payment_method_title: data?.formData?.payment_method === 'pay-on-delivery' ? 'Cash on Delivery' : 'Direct Bank Transfer',
    set_paid: data?.formData?.payment_method === 'pay-on-delivery' ? false : true,
    billing: {
      first_name: data?.formData?.your_name,
      last_name: '',
      address_1: data?.formData?.address,
      city: data?.formData?.city,
      postcode: data?.formData?.postcode,
      country: data?.formData?.country,
      email: data?.formData?.your_email,
      phone: data?.formData?.phone_number,
    },
    shipping: {
      first_name: data?.formData?.your_name,
      last_name: '',
      address_1: data?.formData?.address,
      city: data?.formData?.city,
      postcode: data?.formData?.postcode,
      country: data?.formData?.country,
    },
    line_items
  };

  try {
    const response = await WooCommerce.post('orders', orderData);
    const orderId = response.data.id
    return new NextResponse(
      JSON.stringify({
        status: "success",
        message: "Order Created",
        orderData,
        orderId
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating order:', error);
    return new NextResponse(
      JSON.stringify({
        status: "Error",
        message: "error",
        error
      }),
      { status: 401 }
    );
  }

}
