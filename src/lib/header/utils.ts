import type { NavigationItem } from "@/types/types";

export function getPath(href: string) {
  return href.split("#")[0];
}

export function isNavigationItemActive(
  item: NavigationItem,
  pathname: string,
  allItems: NavigationItem[]
) {
  if (item.href === pathname) {
    return true;
  }

  const hasExactMatch = allItems.some(
    (navigationItem) => navigationItem.href === pathname
  );

  return !hasExactMatch && getPath(item.href) === pathname;
}
