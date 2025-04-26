import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function NavList() {
  return (
    <ul className=" gap-1 md:gap-6 text-white capitalize hidden md:flex">
      {NAV_LINKS.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              buttonVariants({ variant: "link" }),
              "text-white hover:text-gray-300 transition-colors m-0 p-2 md:p-6 text-xs md:text-base"
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
