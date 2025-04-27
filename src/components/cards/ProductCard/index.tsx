import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IProductCard } from "@/lib/types";
import { Badge } from "@components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard({
  id,
  title,
  description,
  price,
  discountPercentage,
  rating,
  stock,
  brand,
  category,
  thumbnail,
  images,
}: IProductCard) {
  return (
    <Link
      href={`/products/${id}`}
      key={`product-link-${id}`}
      className="mx-auto w-full"
    >
      <Card className="w-full flex-col p-0 overflow-hidden max-w-[19rem] gap-0 min-h-[20rem] m-0 mx-auto shadow-none border-none">
        <CardContent className="relative flex-4 bg-accent flex justify-center items-center rounded-b-2 h-[17rem] min-h-[17rem] max-h-[17rem]">
          <Image
            src={thumbnail}
            alt="asd"
            width={200}
            height={200}
            style={{ height: "auto" }}
          />
          <Badge className="absolute top-[1rem] left-[1rem] bg-champagne text-black text-xs">
            Popular
          </Badge>

          <Badge className="absolute bottom-[1rem] right-0 rounded-none rounded-l-2xl bg-black text-white text-xs">
            40% off
          </Badge>
        </CardContent>
        <CardFooter className=" flex flex-col justify-center items-start p-4 flex-1 h-[6rem] min-h-[6rem] max-h-[6rem]">
          <span className="text-base font-normal text-light-olive">
            ${price}
          </span>
          <h3 className="text-base font-medium">{title}</h3>
          <span className="text-xs text-gray-300">{category}</span>
        </CardFooter>
      </Card>
    </Link>
  );
}
