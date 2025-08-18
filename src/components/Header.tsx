"use client";
import styles from "./Header.module.css";
import type { HeaderProps } from "../types";

export default function Header({ opacity }: HeaderProps) {
  return (
    <header className={styles.header} style={{ opacity }}>
      <nav className={styles.navLeft}>
        <a
          href="#shop"
          className={styles.navLink}
          aria-label="Browse flower shop"
        >
          Shop Flowers
        </a>
        <a
          href="#lifestyle"
          className={styles.navLink}
          aria-label="Browse lifestyle products"
        >
          Shop Lifestyle
        </a>
        <a href="#blog" className={styles.navLink} aria-label="Read our blog">
          Bloom Pulse
        </a>
      </nav>

      <div className={styles.logo}>
        <h1>bloom</h1>
      </div>

      <nav className={styles.navRight}>
        <a
          href="#cart"
          className={styles.navLink}
          aria-label="View shopping cart"
        >
          Cart
        </a>
        <a
          href="#search"
          className={styles.navLink}
          aria-label="Search products"
        >
          Search
        </a>
        <a
          href="#signin"
          className={styles.navLink}
          aria-label="Sign in to your account"
        >
          Sign in
        </a>
      </nav>
    </header>
  );
}
