"use client";

import type React from "react";

import { useState, useCallback, useEffect } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hello@bloom.com");
      setIsCopied(true);
    } catch (err) {
      console.log("Failed to copy email");
    }
  };

  return (
    <footer
      className={styles.footer}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={styles.cursorGlow}
        style={{
          left: cursorPosition.x - 75,
          top: cursorPosition.y - 75,
          transform: `scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      <div className={styles.footerContent}>
        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Looking for fresh flowers?</h2>
          <button
            className={`${styles.emailButton} ${
              isHovering ? styles.emailHover : ""
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleCopy}
          >
            hello@bloom.com
          </button>
          {isCopied && (
            <p className={styles.copiedMessage}>Copied to clipboard!</p>
          )}
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.footerColumn}>
            <h3>Shop</h3>
            <a href="#">Fresh Flowers</a>
            <a href="#">Dried Arrangements</a>
            <a href="#">Wedding Bouquets</a>
            <a href="#">Corporate Events</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>About</h3>
            <a href="#">Our Story</a>
            <a href="#">Sustainability</a>
            <a href="#">Local Growers</a>
            <a href="#">Care Guide</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>Support</h3>
            <a href="#">Contact Us</a>
            <a href="#">Delivery Info</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>Connect</h3>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Pinterest
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Newsletter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Reviews
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 Bloom. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
