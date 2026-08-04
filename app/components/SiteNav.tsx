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
    <nav className="sticky top-0 z-50 flex flex-wrap items-center gap-8 border-b border-[#86dbc6] bg-white/95 px-6 py-4 shadow-[0_8px_28px_rgba(0,103,197,0.08)] backdrop-blur md:px-12 lg:gap-16">
      <Link href="/" aria-label="SHPE TAMU-CC home">
        <img
          src="/Pictures/logos/shpe_logo.png"
          alt="SHPE TAMU-CC Logo"
          className="h-14 w-auto md:h-16"
        />
      </Link>

      <div className="flex flex-wrap gap-x-7 gap-y-3 text-base font-medium text-[#0f2f57] md:text-lg lg:gap-x-10">
        {navigation.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 transition hover:bg-[#defbf5] hover:text-[#0b8b70] ${
                isActive ? "bg-[#defbf5] font-bold text-[#0b8b70]" : ""
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
