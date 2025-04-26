"use client";
import { useEffect, useState } from "react";
import SearchTabs from "../search-tabs";
import Container from "@components/ui/container";

export default function Header() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <header className="relative w-full h-full min-h-[50rem] bg-light-olive pt-[6rem] overflow-hidden">
      <div className="mt-[8rem]">
        <div
          className={`absolute left-0 bottom-0 w-[48%] bg-gainsboro z-10 transition-all duration-1000 ${
            isAnimated ? "h-[85%]" : "h-0"
          }`}
        ></div>
        <div
          className={`absolute right-0 bottom-[-10rem] w-[45%] bg-gainsboro z-10 transition-all duration-1000 delay-100 ${
            isAnimated ? "h-[85%]" : "h-0"
          }`}
        ></div>
        <Container>
          <div className="relative flex justify-center items-center w-full h-full flex-col z-20">
            <span className="text-white text-[1.125rem]">New Fashion</span>
            <h1 className=" philo-font text-center text-5xl md:text-5xl lg:text-8xl text-white">
              Style with <br /> Luxury Fashion
            </h1>
            <SearchTabs />
          </div>
        </Container>
      </div>
    </header>
  );
}
