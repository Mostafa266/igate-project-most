import Container from "@/components/ui/container";
import React from "react";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <section className="w-full bg-off-white py-20">
      <h2 className="text-5xl philo-font text-olive-gray text-center">
        All Products
      </h2>
      <Container>
        <ProductList />
      </Container>
    </section>
  );
};

export default Products;
