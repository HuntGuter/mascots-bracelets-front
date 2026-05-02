import { cn } from "@/lib/utils";

import styles from "@/components/layout/header.module.scss";

type SelectOption = {
  label: string;
  value: string;
};

type UtilitySelectProps = {
  ariaLabel: string;
  options: SelectOption[];
  value: string;
};

export function UtilitySelect({
  ariaLabel,
  options,
  value,
}: UtilitySelectProps) {
  return (
    <select
      aria-label={ariaLabel}
      className={cn(styles.utilityButton, styles.parallelogram)}
      defaultValue={value}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
