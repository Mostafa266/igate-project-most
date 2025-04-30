// components/pagination.tsx

"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface PaginationComponentProps {
  totalPages: number;
}

export const PaginationComponent = ({
  totalPages,
}: PaginationComponentProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const renderNewPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false }); // prevents scroll-to-top
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-10">
      <Button
        className="cursor-pointer"
        onClick={() => renderNewPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </Button>
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <Button
            className="cursor-pointer"
            key={page}
            onClick={() => renderNewPage(page)}
            variant={page === currentPage ? "default" : "outline"}
          >
            {page}
          </Button>
        );
      })}
      <Button
        className="cursor-pointer"
        onClick={() => renderNewPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </Button>
    </div>
  );
};
