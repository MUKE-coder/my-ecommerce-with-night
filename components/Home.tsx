import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {
  // Sample data for categories and products
  const categories = [
    "Electronics",
    "Clothing",
    "Books",
    "Home & Garden",
    "Sports",
    "Toys",
    "Beauty",
    "Automotive",
  ];

  const products = [
    { id: 1, name: "Wireless Earbuds", price: 79.99, category: "Electronics" },
    { id: 2, name: "Slim Fit Jeans", price: 49.99, category: "Clothing" },
    { id: 3, name: "Bestseller Novel", price: 14.99, category: "Books" },
    { id: 4, name: "Smart LED Bulb", price: 29.99, category: "Home & Garden" },
    { id: 5, name: "Yoga Mat", price: 24.99, category: "Sports" },
    { id: 6, name: "Building Blocks Set", price: 39.99, category: "Toys" },
    { id: 7, name: "Face Moisturizer", price: 19.99, category: "Beauty" },
    { id: 8, name: "Car Phone Mount", price: 15.99, category: "Automotive" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        {/* Categories section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="flex-shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Product listing section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="flex flex-col justify-between">
                <CardHeader>
                  <div className="w-full h-48 bg-gray-200 rounded-md mb-4">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=${encodeURIComponent(
                        product.name
                      )}`}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button size="sm">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
