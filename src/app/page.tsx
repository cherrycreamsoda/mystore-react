"use client";

import styles from "./page.module.css";
import Header from "../components/Header";
import Notification from "../components/Notification";
import Hero from "../components/Hero";
import Shop from "../components/Shop";
import Footer from "../components/Footer";
import { useScrollOpacity } from "../hooks/use-scroll-opacity";

export default function Home() {
  const headerOpacity = useScrollOpacity(300);

  return (
    <div className={styles.container}>
      <Header opacity={headerOpacity} />
      <Notification opacity={headerOpacity} />
      <Hero />
      <Shop />
      <Footer />
    </div>
  );
}
