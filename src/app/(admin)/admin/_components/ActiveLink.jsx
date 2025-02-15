"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({
  children,
  href = "",
  className = "",
  ...extra
}) {
  const pathname = usePathname();
  const isActive = pathname
    .toLocaleLowerCase()
    .startsWith(href.toLocaleLowerCase());
  return (
    <>
      <Link
        {...extra}
        className={`${className} ${isActive ? "bg-gray-100" : ""}`}
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
