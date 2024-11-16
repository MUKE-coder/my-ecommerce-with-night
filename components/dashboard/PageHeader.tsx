import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
type PageHeaderProps = {
  pageTitle: string;
  linkTitle: string;
  link: string;
};
export default function PageHeader({
  pageTitle,
  linkTitle,
  link,
}: PageHeaderProps) {
  return (
    <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
      <h2>{pageTitle}</h2>
      <Button asChild>
        <Link href={link}>{linkTitle}</Link>
      </Button>
    </div>
  );
}
