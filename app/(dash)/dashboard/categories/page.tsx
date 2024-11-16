import PageHeader from "@/components/dashboard/PageHeader";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        pageTitle="Categories"
        link="/dashboard/categories/new"
        linkTitle="New Category"
      />
    </div>
  );
}
