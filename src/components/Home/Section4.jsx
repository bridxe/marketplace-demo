import React from "react";
import Card2 from "../Card2";
import styles from "./Section4.module.css";

export default function Section4() {
  return (
    <div className={styles.Section4}>
      <div>
        <p className={styles.caption1}> MORE THAN JUST CLOTHES</p>
      </div>
      <div className={styles.ImgandTextContainer}>
        <div className={styles.textContainer}>
          <p className={styles.caption2}>OUT OF SEASON? NO PROBLEM</p>
          <p className={styles.description}>
            Ever lost your favorite jacket? Chances are, you weren't able to buy
            the same one to replace it. Every season, many brands release new
            clothes and phase out the previous season. If you own a NFT of your
            clothes, you own a 3D copy of the original, meaning you can get an
            exact copy of the clothes you lost.
          </p>
        </div>

        <div className={styles.img}>
          <Card2 img="Section4-1.png" name="RESALE MARKET"></Card2>
        </div>
        <div className={styles.img}>
          <Card2 img="Section4-2.png" name="SUPPORT CREATORS"></Card2>
        </div>
        <div className={styles.img}>
          <Card2 img="Section4-3.png" name="TRAVEL THE METAVERSE"></Card2>
        </div>
      </div>
    </div>
  );
}
