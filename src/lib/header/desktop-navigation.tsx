import styles from "@/components/layout/header.module.scss";
import { Logo } from "./logo";
import { NavigationGroup } from "./navigation-group";
import type { NavigationItem } from "../../types/types";

type DesktopNavigationProps = {
  leftItems: NavigationItem[];
  rightItems: NavigationItem[];
  pathname: string;
};

export function DesktopNavigation({
  leftItems,
  rightItems,
  pathname,
}: DesktopNavigationProps) {
  return (
    <div className={styles.desktopNav}>
      <NavigationGroup items={leftItems} pathname={pathname} />
      <Logo />
      <NavigationGroup items={rightItems} pathname={pathname} />
    </div>
  );
}
