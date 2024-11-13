import { getCategories } from "@/actions/category";
import Home from "@/components/Home";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import React from "react";

export default async function page() {
  const categories = (await getCategories()) || [];
  console.log(categories);
  return (
    <div className="">
      <Home categories={categories} />
    </div>
  );
}
