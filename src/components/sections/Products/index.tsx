import Container from "@/components/ui/container";
import React, { useState } from "react";
import ProductList from "./ProductList";
import { PriceFilter } from "@/app/filters/PriceFilter";
import { CategoryFilter } from "@/app/filters/CategoryFilter";

const Products = () => {
  const [range, setRange] = useState<number[]>([0, 1000]);

  return (
    <section className="w-full bg-off-white py-20">
      <h2 className="text-5xl philo-font text-olive-gray text-center">
        All Products
      </h2>
      <Container>
        <div className="w-full flex justify-between items-center mt-25 ">
          <CategoryFilter />
          <PriceFilter range={range} setRange={setRange} />
        </div>
        <ProductList range={range} />
      </Container>
    </section>
  );
};

export default Products;
