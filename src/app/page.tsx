"use client";

import Header from "@/components/layout/Header";
import Features from "@/components/sections/Features";
import NewsLetter from "@/components/sections/NewsLetter";
import Offer from "@/components/sections/Offer";
import Products from "@/components/sections/Products";
import SponsorsSlider from "@/components/sliders/SponsorsSlider";

export default function Home() {
  return (
    <>
      <Header />
      <SponsorsSlider />
      <Features />
      <Products />
      <Offer />
      <NewsLetter />
    </>
  );
}
