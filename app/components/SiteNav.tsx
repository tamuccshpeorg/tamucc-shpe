"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/about-us", label: "About Us" },
  { href: "/leadership", label: "Leadership" },
  { href: "/membership", label: "MemberSHPE" },
  { href: "/resources", label: "Resources" },
  { href: "/sponsorship", label: "Sponsorship" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-8 border-b bg-white px-6 py-5 shadow-sm md:px-12 lg:gap-16">
      <Link href="/" aria-label="SHPE TAMU-CC home">
        <img
          src="/Pictures/logos/shpe_logo.png"
          alt="SHPE TAMU-CC Logo"
          className="h-14 w-auto md:h-16"
        />
      </Link>

      <div className="flex flex-wrap gap-x-7 gap-y-3 text-base font-medium text-blue-950 md:text-lg lg:gap-x-10">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-[#0067C5] ${
                isActive ? "font-bold text-[#0067C5]" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
