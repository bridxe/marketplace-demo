import React from "react";
import styles from "./CardWishlist.module.css";
import Button1 from "../Button1.jsx";

export default function CardWishlist() {
  return (
    <div className={styles.mainCard}>
      <div className={styles.twoContainers}>
        <div className={styles.imgContainer}>
          <img src="SliderImages/1.png"></img>
        </div>
        <div className={styles.labelContainer}>
          <h3>
            BRIDXE <br /> T-SHIRT{" "}
          </h3>

          <form>
            <label htmlFor="sizes">Size </label>
            <select id="sizes" name="sizes">
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">L</option>
              <option value="extra large">XL</option>
            </select>
          </form>

          <p> $16.00 USD </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button1> ADD TO BAG</Button1>
      </div>
    </div>
  );
}
