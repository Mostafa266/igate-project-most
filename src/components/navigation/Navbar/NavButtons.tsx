import { Button } from "@/components/ui/button";
import { ShoppingCart, SquareMenu } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavButtons() {
  return (
    <div className="flex gap-2 md:gap-5 ">
      <Button asChild variant={"ghost"}>
        <Link href={"/"} className="text-white hover:text-black">
          <ShoppingCart />
        </Link>
      </Button>
      <Button
        asChild
        variant={"secondary"}
        className="rounded-[0.8rem] md:rounded-full"
      >
        <Link href={"/login"}>Login</Link>
      </Button>
      <Button
        variant={"ghost"}
        className="rounded-[0.8rem] md:hidden cursor-pointer text-white "
      >
        <SquareMenu />
      </Button>
    </div>
  );
}
