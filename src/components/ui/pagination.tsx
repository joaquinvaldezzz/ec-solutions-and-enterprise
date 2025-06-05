import type { ComponentProps } from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";

function Pagination({ className, ...props }: ComponentProps<"nav">) {
  return (
    <nav
      className={cn("mx-auto flex w-full justify-center", className)}
      data-slot="pagination"
      role="navigation"
      aria-label="pagination"
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      data-slot="pagination-content"
      {...props}
    />
  );
}

function PaginationItem({ ...props }: ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ComponentProps<typeof Button>, "size"> &
  ComponentProps<"a">;

function PaginationLink({ className, isActive, size = "icon", ...props }: PaginationLinkProps) {
  return (
    <a
      className={cn(
        buttonVariants({
          variant: (isActive ?? false) ? "outline" : "ghost",
          size,
        }),
        className,
      )}
      data-active={isActive}
      data-slot="pagination-link"
      aria-current={(isActive ?? false) ? "page" : undefined}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      aria-label="Go to previous page"
      size="default"
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      aria-label="Go to next page"
      size="default"
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn("flex size-9 items-center justify-center", className)}
      aria-hidden
      data-slot="pagination-ellipsis"
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
