import styles from "@/components/layout/header.module.scss";
import { Logo } from "./logo";
import { NavigationGroup } from "./navigation-group";
import type { NavigationItem } from "@/types/types";

type DesktopNavigationProps = {
  leftItems: NavigationItem[];
  rightItems: NavigationItem[];
  allItems: NavigationItem[];
  pathname: string;
};

export function DesktopNavigation({
  leftItems,
  rightItems,
  allItems,
  pathname,
}: DesktopNavigationProps) {
  return (
    <div className={styles.desktopNav}>
      <NavigationGroup
        items={leftItems}
        allItems={allItems}
        pathname={pathname}
      />
      <Logo />
      <NavigationGroup
        items={rightItems}
        allItems={allItems}
        pathname={pathname}
      />
    </div>
  );
}
