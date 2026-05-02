import styles from "@/components/layout/header.module.scss";
import { NavLink } from "./nav-link";
import type { NavigationItem } from "../../types/types";
import { getPath } from "./utils";

type NavigationGroupProps = {
  items: NavigationItem[];
  pathname: string;
};

export function NavigationGroup({ items, pathname }: NavigationGroupProps) {
  return (
    <div className={styles.navGroup}>
      {items.map((item) => (
        <NavLink
          key={`${item.href}-${item.label}`}
          item={item}
          isActive={getPath(item.href) === pathname}
        />
      ))}
    </div>
  );
}
