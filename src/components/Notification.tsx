"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./Notification.module.css";

interface NotificationProps {
  opacity: number;
}

export default function Notification({ opacity }: NotificationProps) {
  const [showNotification, setShowNotification] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const messages = [
    "Now open at 3 E. 3rd St, NYC, 10am to 9pm daily!",
    "Spring Sale: 20% off all bouquets this week!",
    "Free delivery on orders over $50",
    "New arrivals: Exotic orchids now in stock",
    "Mother's Day special arrangements available",
  ];

  const handleClose = useCallback(() => {
    setShowNotification(false);
  }, []);

  useEffect(() => {
    if (!showNotification) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [showNotification, messages.length]);

  if (!showNotification) return null;

  return (
    <div className={styles.notification} style={{ opacity }}>
      <div className={styles.notificationWrapper}>
        <span
          className={`${styles.notificationText} ${
            isAnimating ? styles.animating : ""
          }`}
        >
          {messages[currentMessageIndex]}
        </span>
      </div>
      <button
        className={styles.closeBtn}
        onClick={handleClose}
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}
