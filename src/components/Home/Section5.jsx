import React from "react";
import styles from "./Section5.module.css";
import Card3 from "../Card3";

const clothes = ["SKIRT", "T-SHIRT", "DRESS", "JACKET", "PANTS", "DENIM"];

export default function Section5(props) {
  console.log(clothes);
  return (
    <div className={styles.Section5}>
      <div className={styles.ImgandTextContainer}>
        <div className={styles.MenuContainer}>
          <ul className={styles.list}>
            {clothes.map((type) => (
              <li>{type}</li>
            ))}
            <li className={styles.lastItem}>BEACHWEAR</li>
          </ul>
        </div>
        <div className={styles.ImgContainer}>
          <Card3></Card3>
        </div>
      </div>
    </div>
  );
}
