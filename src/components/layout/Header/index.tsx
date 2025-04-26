"use client";
import SearchTabs from "@components/search-tabs";
import Container from "@components/ui/container";
import AnimatedBackground from "./AnimatedBackground";
import HeroTitle from "./HeroTitle";

export default function Header() {
  return (
    <header className="relative w-full h-full min-h-[50rem] bg-light-olive pt-[6rem] overflow-hidden">
      <div className="mt-[8rem]">
        <AnimatedBackground />
        <Container>
          <div className="relative flex justify-center items-center w-full h-full flex-col z-20">
            <HeroTitle />
            <SearchTabs />
          </div>
        </Container>
      </div>
    </header>
  );
}
