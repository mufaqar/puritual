// app/api/checkout-session/route.ts
import WooCommerce from "@/lib/woocommerce";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const data = await req.json() 
  
  const line_items = data?.cart?.items?.map((item:any)=>{
    return {
        product_id: item?.id,
        quantity: item?.quantity
    }
  })

  const orderData = {
    payment_method: 'bacs',
    payment_method_title: 'Direct Bank Transfer',
    set_paid: true,
    billing: {
      first_name: 'John',
      last_name: 'Doe',
      address_1: '123 Main St',
      city: 'Anytown',
      postcode: '12345',
      country: 'US',
      email: 'john.doe@example.com',
      phone: '1234567890',
    },
    shipping: {
      first_name: 'John',
      last_name: 'Doe',
      address_1: '123 Main St',
      city: 'Anytown',
      postcode: '12345',
      country: 'US',
    },
    line_items
  };

  try {
    const response = await WooCommerce.post('orders', orderData);
    return NextResponse.json({ message: "success", response });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ message: "Error", error });
  }

}
