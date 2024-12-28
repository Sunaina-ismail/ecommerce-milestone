import { products } from "@/components/productdata";
import { NextResponse } from "next/server";



export async function GET() {
  return NextResponse.json(products);
}
