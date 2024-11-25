import { getCategories } from "@/actions/category";
import ProductForm from "@/components/forms/ProductForm";
import React from "react";

export default async function page() {
  const categories = (await getCategories()) || [];
  return (
    <div className="w-full  p-8 mx-auto">
      <ProductForm categories={categories} />
    </div>
  );
}
