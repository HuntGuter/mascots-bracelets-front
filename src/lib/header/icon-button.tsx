import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import styles from "@/components/layout/header.module.scss";
import { Button } from "@/components/ui/button";

type IconButtonProps = {
  label: string;
  children: ReactNode;
};

export function IconButton({ label, children }: IconButtonProps) {
  return (
    <Button
      className={cn(styles.cartButton, styles.parallelogram)}
      aria-label={label}
    >
      {children}
    </Button>
  );
}
