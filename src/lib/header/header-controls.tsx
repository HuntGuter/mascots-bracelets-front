import { ShoppingBag } from "lucide-react";

import styles from "@/components/layout/header.module.scss";
import { IconButton } from "./icon-button";
import { MobileMenu } from "./mobile-menu";
import { UtilitySelect } from "./utility-select";

export function HeaderControlsLeft() {
  return (
    <div className={styles.leftControls}>
      <MobileMenu />

      <div className={styles.desktopUtility}>
        <UtilitySelect label="EN" />
        <UtilitySelect label="USD" />
      </div>
    </div>
  );
}

export function HeaderControlsRight() {
  return (
    <div className={styles.rightControls}>
      <IconButton label="Cart">
        <ShoppingBag className="size-5" />
        <span className={styles.cartLabel}>Cart</span>
      </IconButton>
    </div>
  );
}
