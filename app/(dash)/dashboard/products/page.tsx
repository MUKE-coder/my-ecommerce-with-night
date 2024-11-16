import PageHeader from "@/components/dashboard/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        pageTitle="Products"
        link="/dashboard/products/new"
        linkTitle="New Product"
      />
    </div>
  );
}
