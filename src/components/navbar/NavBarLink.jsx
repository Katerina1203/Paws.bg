"use client";

import Link from "next/link";
import styles from "./navbarLink.module.css";

import { usePathname } from "next/navigation";
const NavBarLink = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavBarLink;