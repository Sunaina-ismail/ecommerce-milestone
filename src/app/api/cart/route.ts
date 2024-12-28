import { NextResponse } from "next/server";

let cart: {
  image: string;
  id: number;
  title: string;
  price: number;
  quantity: number;
}[] = [];

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(req: Request) {
  const { image, id, title, price } = await req.json();
  const existingProduct = cart.find((item) => item.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ image, id, title, price, quantity: 1 });
  }

  return NextResponse.json(cart);
}

export async function PUT(req: Request) {
  const { id, quantity } = await req.json();
  const product = cart.find((item) => item.id === id);

  if (product) {
    product.quantity = quantity;
  }

  return NextResponse.json(cart);
}


export async function DELETE(req: Request) {
  const { id } = await req.json();
  cart = cart.filter((item) => item.id !== id);

  return NextResponse.json(cart);
}
