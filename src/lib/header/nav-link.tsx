import Link from "next/link";

import { cn } from "@/lib/utils";

import styles from "@/components/layout/header.module.scss";
import type { NavigationItem } from "@/types/types";

type NavLinkProps = {
  item: NavigationItem;
  isActive: boolean;
};

export function NavLink({ item, isActive }: NavLinkProps) {
  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={cn(styles.navLink, isActive && styles.navLinkActive)}
    >
      {item.label}
    </Link>
  );
}
