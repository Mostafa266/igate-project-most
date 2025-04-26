import React from "react";
import Logo from "@/images/logo.svg";
import Image from "next/image";

export default function BrandLogo() {
  return (
    <Image
      src={Logo}
      alt="Novara brand logo"
      className="w-[4rem] md:w-auto"
    ></Image>
  );
}
