import React from "react";
import styles from "./ShoppingBag.module.css";
import BagCard from "./BagCard";
import Summary from "./Summary";

export default function ShoppingBag() {
  return (
    <div className={styles.mainContainer}>
      <span className={styles.BagHeading}>SHOPPING BAG </span>
      <div className={styles.BagContainer}>
        <div className={styles.firstContainer}>
          <BagCard />
        </div>

        <div className={styles.secondContainer}>
          <Summary />
        </div>
      </div>
    </div>
  );
}
