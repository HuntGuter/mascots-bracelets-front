import styles from "@/components/layout/header.module.scss";
import { NavLink } from "./nav-link";
import type { NavigationItem } from "@/types/types";
import { isNavigationItemActive } from "./utils";

type NavigationGroupProps = {
  items: NavigationItem[];
  allItems: NavigationItem[];
  pathname: string;
};

export function NavigationGroup({
  items,
  allItems,
  pathname,
}: NavigationGroupProps) {
  return (
    <div className={styles.navGroup}>
      {items.map((item) => (
        <NavLink
          key={`${item.href}-${item.label}`}
          item={item}
          isActive={isNavigationItemActive(item, pathname, allItems)}
        />
      ))}
    </div>
  );
}
