import Container from "@/components/ui/container";
import React, { useEffect, useState, SetStateAction, Suspense } from "react";
import ProductList from "./ProductList";
import { PriceFilter } from "@/filters/PriceFilter";
import { CategoryFilter } from "@/filters/CategoryFilter";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { PaginationComponent } from "@/components/pagination";

const ProductsContent = () => {
  const [range, setRange] = useState<number[]>([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(Boolean);

  const handleCategoryChange = (value: SetStateAction<string>) => {
    const newValue =
      typeof value === "function" ? value(selectedCategory) : value;
    setSelectedCategory(newValue);
    // Update URL with new category and reset page to 1
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", newValue);
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const limit = 10;
      const skip = (page - 1) * limit;
      const baseUrl =
        selectedCategory !== "all"
          ? `https://dummyjson.com/products/category/${selectedCategory}`
          : `https://dummyjson.com/products`;

      try {
        setLoading(true);
        const response = await fetch(`${baseUrl}?limit=${limit}&skip=${skip}`);
        const data = await response.json();
        setProducts(data.products || data);
        setTotalPages(
          Math.min(Math.ceil((data.total || data.length) / limit), 10)
        );
      } catch (error) {
        console.error("Error to get products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page, selectedCategory]);

  return (
    <section className="w-full bg-off-white py-20">
      <h2 className="text-5xl philo-font text-olive-gray text-center">
        All Products
      </h2>
      <Container>
        <div className="w-full flex justify-between items-center mt-25">
          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={handleCategoryChange}
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

const Products = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  );
};

export default Products;
