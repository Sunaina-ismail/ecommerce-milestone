import Image from "next/image";


export interface Headphones {
  id: number;
  image: string;
  name: string;
  price: number;
  shortDescription: string;
}
export default function ProductList({ product }: { product: Headphones }) {
  return (
    <div>
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
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          {product.shortDescription}
        </p>
      </div>
    </div>
  );
}
