import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, ShoppingCart } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          EcoShop
        </Link>
        <div className="flex items-center space-x-4 flex-1 max-w-md mx-4">
          <Input className="flex-1" placeholder="Search products..." />
          <Button size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <Button size="icon" variant="outline">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Cart</span>
        </Button>
      </div>
    </header>
  );
}
