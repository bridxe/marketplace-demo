import React from "react";
import styles from "./Footer.module.css";
import TextField from "@mui/material/TextField";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.firstContainer}>
        <div className={styles.subscribeContainer}>
          <span className={styles.subscribe}> SUBSCRIBE TO OUR EMAILS</span>
          <span>
            Be the first to know about new collections and exclusive offers.
          </span>
          <div className={styles.inputContainer}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="secondary"
            />
          </div>
        </div>
        <div className={styles.listContainer}>
          <ul>
            <li className={styles.heading}>SHOP </li>
            <li>All Products</li>
            <li>New Arrivals</li>
            <li>Sales</li>
          </ul>
          <ul>
            <li className={styles.heading}> CUSTOMER SERVICE</li>
            <li>Help</li>
            <li>Terms And Conditions</li>
            <li> Delivery </li>
            <li> Returns</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li className={styles.heading}>BUSINESS</li>
            <li>Store Locator</li>
            <li>About US</li>
            <li>Work With US</li>
          </ul>
        </div>
      </div>
      <div className={styles.SecondContainer}>
        <div className={styles.shopify}>© 2022 bridxe Powered by Shopify</div>
        <div className={styles.socialmedia}>
          <ul className={styles.medialist}>
            <li> FACEBOOK</li>
            <li> INSTAGRAM </li>
            <li>TWITTER</li>
          </ul>
        </div>
      </div>
      <div className={styles.thirdContainer}>
        All rights are reserved lorem ipsum dolor sit amet, consectetur
        adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fames at feugiat molestie sed malesuada habitant euismod aenean. Leo ut
        phasellus lobortis egestas.
      </div>
    </div>
  );
}
