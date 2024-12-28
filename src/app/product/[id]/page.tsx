"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export interface data {
  id: number;
  image: string;
  name: string;
  price: number;
  detailedDescription: string;
  reviews: number;
  rating: number;
  sold: number;
  available: string;
}

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [product, setProduct] = useState<data | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Product not Fetched");
        }
        setProduct(await res.json());
      } catch (error) {
        console.error(
          `Something went wrong while fetching productdetail` + error
        );
      }
    };
    fetchDetail();
  }, [id]);

  const addToCart = async () => {
    if (!product) return;
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: product.id,
        title: product.name,
        image: product.image,
        price: product.price,
      }),
    });

    if (response.ok) {
      alert(`${product.name} added to cart!`);
    } else {
      alert("Failed to add product to cart.");
    }
  };

  if (!product) return <div className="flex items-center justify-center text-2xl font-semibold py-28  text-gray-700" >Sorry Product not found</div>;

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-6 md:p-12 max-w-5xl mx-auto">
        <div className="max-w-full md:w-[50%] mb-6 md:mb-0">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="object-cover rounded-md"
          />
        </div>

        <div className="max-w-96 md:w-[90%] md:px-2 md:ml-16">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {product.name}
          </h1>
          <div className="flex items-center border-2 px-3 py-2 md:border-none space-x-4 mb-4">
            <span className="text-green-400 text-sm md:text-lg font-bold">
              {product.rating}  
            </span>
            <span className="text-gray-500 text-sm md:text-base">
              {product.reviews} Reviews
            </span>
            <span className="text-gray-500 text-sm md:text-base">
              {product.sold} Sold
            </span>
          </div>

          <p className="text-2xl font-bold text-gray-800 mb-4">
            {product.price}
          </p>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6">
            {product.detailedDescription}
          </p>

          <div className="flex items-center space-x-4 mb-2">
            <button className="border border-gray-300 px-3 py-2 ">-</button>
            <span className="font-semibold">1</span>
            <button className="border border-gray-300 px-3 py-2">+</button>
          </div>

          <p className="text-gray-500 mb-2">{product.available}</p>

          <button
            onClick={addToCart}
            className="bg-white border border-black   hover:bg-yellow-500 text-black font-semibold py-2 px-3 md:py-3 md:px-6 rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
