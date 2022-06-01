import React from "react";
import styles from "./Catalog.module.css";
import Card1 from "../Card1";

export default function Catalog() {
  return (
    <div className={styles.CatalogContainer}>
      <div className={styles.itemContainer}>
        <span className={styles.itemCategory}> T-SHIRTS</span>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.col}>
          <Card1 />
        </div>
        <div className={styles.col}>
          <Card1 />
        </div>
        <div className={styles.col}>
          <Card1 />
        </div>
        <div className={styles.col}>
          <Card1 />
        </div>
      </div>
    </div>
  );
}
