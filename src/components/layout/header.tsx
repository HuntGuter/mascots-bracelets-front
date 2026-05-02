"use client";

import { usePathname } from "next/navigation";

import { DesktopNavigation } from "@/lib/header/desktop-navigation";
import {
  HeaderControlsLeft,
  HeaderControlsRight,
} from "@/lib/header/header-controls";
import { Logo } from "@/lib/header/logo";
import { navigation } from "@/constants/navigation";
import styles from "./header.module.scss";

export function Header() {
  const pathname = usePathname();
  const leftNavigation = navigation.slice(0, 3);
  const rightNavigation = navigation.slice(3);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <HeaderControlsLeft />

        <DesktopNavigation
          leftItems={leftNavigation}
          rightItems={rightNavigation}
          pathname={pathname}
        />

        <div className={styles.mobileLogo}>
          <Logo />
        </div>

        <HeaderControlsRight />
      </nav>
    </header>
  );
}
