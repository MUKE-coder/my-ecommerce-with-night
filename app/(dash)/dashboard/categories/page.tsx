import { getCategories } from "@/actions/category";
import PageHeader from "@/components/dashboard/PageHeader";
import CategoriesTable from "@/components/dashboard/tables/categories-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default async function page() {
  const categories = (await getCategories()) || [];
  return (
    <div>
      <PageHeader
        pageTitle={`Categories(${categories.length})`}
        link="/dashboard/categories/new"
        linkTitle="New Category"
      />
      {categories && categories.length > 0 ? (
        <CategoriesTable categories={categories} />
      ) : (
        <div className="">
          <p>No Categories Found</p>
        </div>
      )}
    </div>
  );
}
