import Container from "@/components/ui/container";
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { PriceFilter } from "@/filters/PriceFilter";
import { CategoryFilter } from "@/filters/CategoryFilter";
import { useSearchParams } from "next/navigation";
import { PaginationComponent } from "@/components/pagination";

const Products = () => {
  const [range, setRange] = useState<number[]>([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(Boolean);

  useEffect(() => {
    const fetchProducts = async () => {
      const limit = 10;
      const skip = (page - 1) * limit;
      const categoryQuery =
        selectedCategory !== "all" ? `&category=${selectedCategory}` : "";

      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}${categoryQuery}`
        );
        const data = await response.json();
        setProducts(data.products);
        setTotalPages(Math.min(Math.ceil(data.total / limit), 10));
      } catch (error) {
        console.error("Error to get products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    console.log(selectedCategory, "sad");
  }, [page, selectedCategory]);

  return (
    <section className="w-full bg-off-white py-20">
      <h2 className="text-5xl philo-font text-olive-gray text-center">
        All Products
      </h2>
      <Container>
        <div className="w-full flex justify-between items-center mt-25 ">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <PriceFilter range={range} setRange={setRange} />
        </div>
        <ProductList
          products={products}
          range={range}
          loading={loading}
          selectedCategory={selectedCategory}
        />
        <PaginationComponent totalPages={totalPages} />
      </Container>
    </section>
  );
};

export default Products;
