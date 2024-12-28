"use client";
import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-white shadow-md items-center justify-center w-full ">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-4 md:py-5">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex text-3xl sm:hidden focus:outline-none items-center justify-center z-50"
            >
              {menuOpen ? (
                <IoClose className="text-3xl z-50 text-yellow-500" />
              ) : (
                <GiHamburgerMenu className="text-2xl text-yellow-500" />
              )}
            </button>
            <h1 className="text-xl md:text-2xl font-bold text-yellow-500">
              SoundVibe
            </h1>
          </div>

          <nav>
            <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
              <li>
                <Link href="/" className="hover:text-yellow-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-500">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/mycart"
                  className="flex items-center justify-center space-x-1 hover:text-yellow-500"
                >
                  <FaShoppingCart className="text-xl " />
                  Cart
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden flex items-center">
            <Link
              href="/mycart"
              className="flex items-center justify-center text-yellow-500 px-2 py-1"
            >
              <FaShoppingCart className=" text-xl" />
            </Link>
          </div>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white  shadow-lg md:hidden z-50">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link
                href="/"
                className="text-lg hover:text-gray-600 font-serif text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-serif hover:text-gray-600 text-yellow-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
