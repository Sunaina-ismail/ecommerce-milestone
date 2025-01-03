"use client";

import { useCart } from "@/components/CartItemContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";


const Cart:React.FC = () => {
 const {cart ,removeItem, updateQuantity} = useCart()

 return (
    <div
      className={`p-4 max-w-4xl mx-auto py-28 space-y-6 ${
        cart.length === 0 ? "min-h-screen flex items-center justify-center" : ""
      }`}
    >
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 text-2xl">Your cart is empty.</p>
          <Link href="/">
            <button className="mt-4 bg-yellow-500 rounded-full hover:bg-white border-black border px-2 py-2 md:p-4 text-black">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-black p-1 md:p-4  bg-white "
            >
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                unoptimized
                className="sm:w-20 sm:h-20 "
              />

            
              <div className="flex-1 px-2">
                <h3 className="text-xs md:text-lg font-medium">{item.name}</h3>
                <p className="text-xs sm:text-base text-gray-500">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

        
              <div className="flex items-center space-x-2 md:space-x-4">
                <button
                  onClick={() => updateQuantity(item.id, - 1)}
                  className="px-1 py-1 bg-yellow-100 "
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-1 py-1 bg-yellow-100 ~~"
                >
                  +
                </button>
              </div>

              
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700  ml-2 md:ml-4"
              >
                <FaTrashAlt size={13} />
              </button>
            </div>
          ))}

          <div className="flex flex-col items-center">
            <Link href="/">
              <button className="bg-yellow-500 rounded-full hover:bg-white border border-black px-2 py-2 md:p-4 text-black">
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
