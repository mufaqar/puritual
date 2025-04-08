"use client";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const handleCheckout = async (data:any) => {
    const res = await fetch("/api/checkout-session", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const session = await res.json();
    
    const stripe = await stripePromise;
    if (stripe) {
        stripe.redirectToCheckout({ sessionId: session.id });
    }
};
