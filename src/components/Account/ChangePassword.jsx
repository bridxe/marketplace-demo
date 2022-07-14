import React from "react";
import styles from "./ChangePassword.module.css";

export default function ChangePassword() {
  return (
    <div className={styles.passwordContainer}>
      <h1>CHANGE PASSWORD </h1>
      <div className={styles.formContainer}>
        <label for="fname" className={styles.formLabel}>
          old password
        </label>
        <input
          type="password"
          className={styles.formInput}
          id="fname"
          placeholder="*******"
        ></input>

        <label for="lname" className={styles.formLabel}>
          confirm new password
        </label>
        <input
          type="text"
          className={styles.formInput}
          id="lname"
          placeholder="*******"
        ></input>

        <label for="lname" className={styles.formLabel}>
          new password
        </label>
        <input
          type="text"
          className={styles.formInput}
          id="lname"
          placeholder="*******"
        ></input>

        <button type="submit" className={styles.submitBtn}>
          save
        </button>
      </div>
    </div>
  );
}
