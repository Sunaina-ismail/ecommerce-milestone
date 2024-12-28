"use client";

import  { Headphones } from "@/components/Products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";

const ProductCollection = () => {
  const [products, setProducts] = useState<Headphones[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        console.log(res);
        if (!res.ok) {
          throw new Error("Failed to fetch product data");
        }

        const data = await res.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch: " + error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-16 px-6 md:py-16 md:px-4 text-center">
        <p className="text-yellow-400 font-serif text-sm md:text-base">
          Featured Headphones
        </p>
        <h2 className="text-3xl md:text-4xl font-bold py-4">
          Our Headphone Collection
        </h2>
        <p className="font-serif text-gray-700 text-sm md:text-base">
          Discover the best headphones tailored for every need. From gaming to
          fitness, we have it all!
        </p>
      </div>

      <div className="mx-auto px-4 md:px-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, i) => (
          <Link key={i} href={`/product/${product.id}`}>
            <div
              key={product.id}
              className="border flex md:px-4 flex-col py-4 px-2 md:py-2 items-center text-center"
            >
              <div className="h-40 sm:h-48 md:h-56 w-full relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="mb-4"
                />
              </div>
              <h2 className="text-base my-2 sm:text-base md:text-lg  font-medium text-gray-700">
                {product.name}
              </h2>
              <p className="text-yellow-500 text-base sm:text-base md:text-xl font-semibold">
                {product.price}
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-base">
                {product.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCollection;
