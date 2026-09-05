"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Receipt, Store, TrendingUp, User } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", icon: House },
  { href: "/shop", label: "Shop", icon: Store },
  { href: "/emi-dues", label: "EMI Dues", icon: Receipt },
  { href: "/limit", label: "Limit", icon: TrendingUp },
  { href: "/profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-md -translate-x-1/2 justify-between rounded-[28px] bg-white px-2 py-2 shadow-[0_8px_28px_rgba(17,24,39,0.14)]">
      {tabs.map(({ href, label, icon: Icon }) => {
        const isActive =
          pathname === href ||
          (href !== "/" && pathname?.startsWith(href));

        return (
          <Link
            key={href}
            href={href}
            className="flex w-full flex-col items-center gap-1 rounded-full px-2 py-1.5 text-center"
          >
            <div className="flex h-6 items-center justify-center">
              {isActive && <div className="mb-1 h-[3px] w-5 rounded-full bg-primary" />}
            </div>
            <div className="flex flex-col items-center gap-1">
              <Icon className={isActive ? "h-[22px] w-[22px] text-primary" : "h-[22px] w-[22px] text-muted"} />
              <span className={isActive ? "text-[11px] font-medium text-primary" : "text-[11px] font-medium text-muted"}>
                {label}
              </span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
