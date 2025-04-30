import ProductCard from "@/components/cards/ProductCard";
import { ProductListProps } from "@/lib/types";

export default function ProductList({
  range,
  products,
  loading,
  selectedCategory,
}: ProductListProps) {
  ///////////////////
  ///////////////////
  ///////////////////
  const filteredProducts = products.filter((product) => {
    const matchesPrice = product.price >= range[0] && product.price <= range[1];
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesPrice && matchesCategory;
  });

  return (
    <div>
      {loading ? (
        <div className="min-h-[60rem] w-full flex my-10 justify-center items-center">
          <span className="text-4xl text-amber-500">Loading...</span>
        </div>
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
    </div>
  );
}
