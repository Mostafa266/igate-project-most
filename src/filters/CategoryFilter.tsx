import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Category = {
  slug: string;
  name: string;
  url: string;
};

type CategoryFilterProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Select
      value={selectedCategory}
      onValueChange={(value) => {
        setSelectedCategory(value);
      }}
    >
      <SelectTrigger className="w-[180px] bg-white cursor-pointer">
        <SelectValue
          placeholder={loading ? "Loading..." : "Select a category"}
        />
      </SelectTrigger>
      <SelectContent className="bg-white max-h-[300px] overflow-y-auto">
        <SelectGroup className="p-2">
          <SelectItem
            value="all"
            key="all-categories"
            className="text-gray-900 hover:bg-gray-100 cursor-pointer"
          >
            All Categories
          </SelectItem>
          {categories.map((category, index) => (
            <SelectItem
              key={`category-${index}-${category.slug}`}
              value={category.slug}
              className="text-gray-900 hover:bg-gray-100 cursor-pointer"
            >
              {category.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
