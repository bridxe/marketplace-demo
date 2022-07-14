import React from "react";

import styles from "./Account.module.css";

export default function Account() {
  return (
    <div className={styles.AccountOverView}>
      <div className={styles.AccountForm}>
        <h1>ACCOUNT OVERVIEW </h1>
        <div className={styles.twoFormContainer}>
          <div className={styles.formLeft}>
            <label for="fname" className={styles.formLabel}>
              First name
            </label>
            <input
              type="text"
              className={styles.formInput}
              id="fname"
              placeholder="Name"
            ></input>

            <label for="email" className={styles.formLabel}>
              email address
            </label>
            <input
              type="email"
              className={styles.formInput}
              id="email"
              placeholder="Loremipsum@gmail.com"
            ></input>

            <label for="number" className={styles.formLabel}>
              phone
            </label>
            <input
              type="text"
              className={styles.formInput}
              id="number"
              placeholder="Number"
            ></input>
          </div>
          <div className={styles.formRight}>
            <label for="lname" className={styles.formLabel}>
              last name
            </label>
            <input
              type="text"
              className={styles.formInput}
              id="lname"
              placeholder="Name"
            ></input>

            <label for="inputAddress2" className={styles.formLabel}>
              date of birth
            </label>
            <input
              type="date"
              className={styles.formInput}
              id="inputAddress2"
              placeholder="22 september 1991"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}
