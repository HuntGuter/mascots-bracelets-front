import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import styles from "@/components/layout/header.module.scss";
import { navigation } from "@/constants/navigation";

const brandSlogan =
  "Our products are your way openers to the power of the elements!";

export function MobileMenu() {
  return (
    <div className={styles.mobileMenu}>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className={cn(styles.menuButton, styles.parallelogram)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className={styles.sheetContent}>
          <SheetHeader className={styles.sheetHeader}>
            <SheetTitle className={styles.sheetTitle}>
              <Image
                src="/logo_new.avif"
                alt="Mascots Bracelets"
                width={96}
                height={60}
                className={styles.sheetLogo}
              />
            </SheetTitle>
            <SheetDescription>
              {brandSlogan}
            </SheetDescription>
          </SheetHeader>

          <div className={styles.sheetNav}>
            {navigation.map((item) => (
              <SheetClose key={`${item.href}-${item.label}`} asChild>
                <Link href={item.href} className={styles.sheetLink}>
                  <span>{item.label}</span>
                  <ArrowRight className={styles.sheetLinkIcon} />
                </Link>
              </SheetClose>
            ))}
          </div>

          <SheetFooter className={styles.sheetFooter}>
            <SheetClose asChild>
              <Button asChild>
                <Link href="/shop">Shop bracelets</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
