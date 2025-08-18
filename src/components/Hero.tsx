import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Bloom</h1>
      </div>
    </main>
  );
}
