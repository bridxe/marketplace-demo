import React from "react";
import styles from "./Summary.module.css";
import Button1 from "../Button1.jsx";

export default function Summary() {
  return (
    <div className={styles.SummaryContainer}>
      <span> SUMMARY</span>
      <div className={styles.listsContainer}>
        <ul>
          <li>SUBTOTAL</li>
          <li>SHIPPING</li>
          <li>TOTAL</li>
        </ul>
        <ul>
          <li>$16</li>
          <li>Calculated </li>
          <li>$16</li>
        </ul>
      </div>
      <Button1>PROCEED TO CHECKOUT</Button1>
    </div>
  );
}
