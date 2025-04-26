import ProductCard from "@/components/cards/ProductCard";
import { PaginationComponent } from "@/components/pagination";
import { IProductCard } from "@/lib/types";
import { useEffect, useState } from "react";

type ProductListProps = {
  range: number[]; // Accept range as a prop
};

export default function ProductList({ range }: ProductListProps) {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState<IProductCard[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products?limit=45");
        const data = await response.json();
        setAllProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(range, "from productlist");

  const filteredProducts = allProducts.filter(
    (product) => product.price >= range[0] && product.price <= range[1]
  );

  console.log(filteredProducts);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="min-h-[60rem] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 my-10 gap-2">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              thumbnail={product.thumbnail}
              price={product.price}
              id={product.id}
              title={product.title}
              description={product.description}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              stock={product.stock}
              brand={product.brand}
              category={product.category}
              images={product.images}
            />
          ))}
        </div>
      )}
      <PaginationComponent />
    </div>
  );
}
