"use client";
import React from "react";
import { Bell, Check, Menu, RefreshCcw, X } from "lucide-react";

import { cn } from "@/lib/utils";
import Sidebar from "@/components/dashboard/Sidebar";
import Navbar from "@/components/dashboard/Navbar";
import AnalyticsCards from "@/components/dashboard/AnalyticsCards";
export default function SidebarV1() {
  const status = "APPROVED";
  return (
    <div className="px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight mb-3">
          Welcome, Dr. JB Web Developer
        </h1>
        <div className="">
          <button
            className={cn(
              "py-2 px-3 rounded-md text-xs flex items-center space-x-2",
              status === "APPROVED"
                ? "bg-green-500 text-white"
                : status === "PENDING"
                ? "bg-orange-400"
                : "bg-red-500 text-white"
            )}
          >
            {status === "APPROVED" ? (
              <Check />
            ) : status === "PENDING" ? (
              <RefreshCcw />
            ) : (
              <X />
            )}

            {status}
          </button>
        </div>
      </div>
      <AnalyticsCards />
    </div>
  );
}
