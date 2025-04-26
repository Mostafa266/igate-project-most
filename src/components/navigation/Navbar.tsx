import Container from "@components/ui/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/images/logo.svg";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@components/ui/button";
import { ShoppingCart, SquareMenu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 p-[0.7rem] md:p-[1.7rem] z-50 w-full">
      <Container>
        <div className="nav-wrapper flex justify-between items-center gap-2">
          <div className="flex gap-1 md:gap-20 justify-center items-center">
            <Image
              src={Logo}
              alt="Novara brand logo"
              className="w-[4rem] md:w-auto"
            ></Image>
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
          </div>
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
        </div>
      </Container>
    </nav>
  );
}
