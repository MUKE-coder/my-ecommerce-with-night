import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button>My Button</Button>
      <ModeToggle />
    </div>
  );
}
