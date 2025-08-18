import styles from "./Shop.module.css";
import ShopItem from "./ShopItem";
import flowersData from "../data/flowers.json";
import type { FlowerItem } from "../types";

export default function Shop() {
  const flowers = flowersData as FlowerItem[];

  return (
    <section className={styles.shopSection}>
      <div className={styles.shopGrid}>
        {flowers.map((flower) => (
          <ShopItem
            key={flower.id}
            id={flower.id}
            name={flower.name}
            price={flower.price}
            image={flower.image}
            category={flower.category}
          />
        ))}
      </div>
    </section>
  );
}
