import Container from "@components/ui/container";
import React from "react";
import NavList from "./NavList";
import NavButtons from "./NavButtons";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 p-[0.7rem] md:p-[1.7rem] z-50 w-full">
      <Container>
        <div className="nav-wrapper flex justify-between items-center gap-2">
          <div className="flex gap-1 md:gap-20 justify-center items-center">
            <BrandLogo />
            <NavList />
          </div>
          <NavButtons />
        </div>
      </Container>
    </nav>
  );
}
