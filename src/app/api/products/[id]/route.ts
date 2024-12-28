import { NextRequest, NextResponse } from "next/server";
import { products } from "@/components/productdata";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id, 10);
  const product = products.find((product) => product.id === id);
  console.log(product);
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}
