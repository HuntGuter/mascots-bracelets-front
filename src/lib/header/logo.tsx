import Image from "next/image";
import Link from "next/link";

import styles from "@/components/layout/header.module.scss";

export function Logo() {
  return (
    <Link
      href="/"
      className={styles.logo}
      aria-label="Mascots Bracelets home"
    >
      <Image
        src="/logo_new.avif"
        alt="Mascots Bracelets"
        width={126}
        height={78}
        priority
        className={styles.logoImage}
      />
    </Link>
  );
}
