// src/types/product.ts

// Define the structure of a single product
export interface Product {
  id: string | number;
  name: string;
  image?: string;
  price?: number;
  [key: string]: unknown; // Use `unknown` instead of `any` for safer typing
}

// Props interface for a component that accepts a list of products
export interface OurProductsProps {
  products: Product[];
}
