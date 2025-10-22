"use client";

import { useEffect } from "react";

interface WooPixelEventsProps {
  product: {
    id: number;
    name: string;
    price: string | number;
    [key: string]: any; // allows extra WooCommerce fields
  };
}

/**
 * This component handles Meta Pixel events for WooCommerce products.
 * Tracks "ViewContent" when a product page loads.
 */
export default function WooPixelEvents({ product }: WooPixelEventsProps) {
  useEffect(() => {
    // Only run client-side
    if (typeof window === "undefined") return;

    const fbq = (window as any).fbq;
    if (fbq && product?.id) {
      fbq("track", "ViewContent", {
        content_name: product.name,
        content_ids: [product.id],
        content_type: "product",
        value: Number(product.price) || 0,
        currency: "PKR", // 🇵🇰 adjust if your store uses another currency
      });
    }
  }, [product]);

  return null; // This component renders nothing visible
}
