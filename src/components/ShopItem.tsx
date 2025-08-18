import styles from "./ShopItem.module.css";
import type { ShopItemProps } from "../types";

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className={styles.star}>
          ★
        </span>
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <span key={i} className={styles.star}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className={`${styles.star} ${styles.empty}`}>
          ★
        </span>
      );
    }
  }

  return <div className={styles.stars}>{stars}</div>;
}

export default function ShopItem({
  name,
  price,
  originalPrice,
  discount,
  image,
  rating,
  reviews,
}: ShopItemProps) {
  const safePrice = price || 0;
  const safeOriginalPrice = originalPrice || 0;
  const safeDiscount = discount || 0;
  const safeRating = rating || 0;
  const safeReviews = reviews || 0;

  return (
    <div className={styles.shopItem}>
      <div className={styles.discountBadge}>Save {safeDiscount}%</div>

      <div className={styles.itemImage}>
        <img
          src={image || "/placeholder.svg"}
          alt={`${name} flower`}
          className={styles.flowerImage}
        />
      </div>

      <div className={styles.itemContent}>
        <h3 className={styles.itemTitle}>{name}</h3>

        <div className={styles.ratingContainer}>
          <StarRating rating={safeRating} />
          <span className={styles.reviewCount}>{safeReviews} reviews</span>
        </div>

        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>
            Rs {safeOriginalPrice.toFixed(2)}
          </span>
          <span className={styles.itemPrice}>Rs {safePrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
