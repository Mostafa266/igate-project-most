import { StaticImageData } from "next/image";

export type INavLink = {
    label: string;
    href: string;
};

export type ISponsorsImage = {
    id:string,
    src:StaticImageData;
    alt:string;
    link?:string;
}

export type IFeatures = {
    title: string,
    description:string,
    icon:StaticImageData
}

export type IProductCard = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export type IPriceRange = {
    min:number;
    max:number;
}

export type IPagination = {
    currentPage:number;
    totalPages:number;
}

export type ProductListProps = {
    range: number[];
    products: IProductCard[];
    loading: boolean;
    selectedCategory: string;
};
  


export type ICategory = {
    name: string;
    slug: string;
}