import * as React from "react";
import Link from "next/link";
import { Container } from "./container";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function BreadcrumbBar({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <div className={cn("border-b border-[#E0DBD2] bg-[#F5F2EA] py-5", className)}>
      <Container>
        <nav aria-label="Breadcrumb" className="font-sans text-[11px] uppercase tracking-[0.14em]">
          <ol className="flex min-w-0 flex-wrap items-center gap-2 text-[#7A7468]">
            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              return (
                <React.Fragment key={`${item.label}-${index}`}>
                  {index > 0 ? <li aria-hidden="true">/</li> : null}
                  <li className={cn(isLast && "text-[#1A1A1A]")}>
                    {item.href && !isLast ? (
                      <Link href={item.href} className="hover:text-[#C75B39]">
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </Container>
    </div>
  );
}
