import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex gap-4  p-24">
      <Button asChild>
        <Link href="/dashboard/categories/new">Add Category</Link>
      </Button>
      <Button asChild>
        <Link href="/dashboard/products/new">Add Product</Link>
      </Button>
    </div>
  );
}
