import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import styles from "@/components/layout/header.module.scss";

type UtilitySelectProps = {
  label: string;
};

export function UtilitySelect({ label }: UtilitySelectProps) {
  return (
    <button className={cn(styles.utilityButton, styles.parallelogram)}>
      {label}
      <ChevronDown className="size-4" />
    </button>
  );
}
