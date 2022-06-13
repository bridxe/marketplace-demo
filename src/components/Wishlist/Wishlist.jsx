import React from "react";
import styles from "./Wishlist.module.css";
import CardWishlist from "./CardWishlist";

export default function Wishlist() {
  return (
    <div className={styles.main}>
      <span> WISHLIST</span>
      <div className={styles.cardContainer}>
        <div className={styles.col}>
          <CardWishlist />
        </div>
        <div className={styles.col}>
          <CardWishlist />
        </div>
        <div className={styles.col}>
          <CardWishlist />
        </div>
      </div>
    </div>
  );
}
