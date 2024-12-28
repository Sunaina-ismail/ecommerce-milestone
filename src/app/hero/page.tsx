import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      <div className="hidden lg:block absolute inset-0">
        <Image
          src="/hero-head.jpeg"
          alt="Headphones Image"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
      </div>

      <div className="lg:hidden absolute inset-0">
        <Image
          src="/yellow.jpg"
          alt="Headphones Image"
          layout="fill"
          objectFit="cover"
          className="-z-10"
        />
      </div>

      <div className="text-center justify-center bg-white bg-opacity-30 sm:bg-white sm:bg-opacity-35 py-8 px-2 md:px-4 md:py-6 text-black">
        <h1 className="text-base md:text-xl font-semibold">
          THINKING OF BUYING A HEADPHONE?
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold py-6 px-2 md:py-4 md:px-4">
          WELCOME TO OUR HEADPHONES SHOP
        </h2>

        <button className="bg-white border border-black  hover:bg-yellow-500 text-black font-semibold py-2 px-3 md:py-2 md:px-4 rounded-full">
          View More
        </button>
      </div>
    </div>
  );
}
