import React from "react";
import styles from "./LeftBar.module.css";
import {
  BsPerson,
  BsBag,
  BsLock,
  BsCreditCard,
  BsWallet,
  BsHouseDoor,
  BsPhoneVibrate,
} from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export default function LeftBar() {
  return (
    <div className={styles.leftContainer}>
      <h1>MY ACCOUNT</h1>
      <h2>Skylar Philips</h2>
      <ul>
        <li>
          <BsPerson className={styles.icon}></BsPerson>
          <a>account overview</a>
        </li>
        <li>
          <BsBag className={styles.icon}></BsBag>
          <a>my orders</a>
        </li>
        <li>
          <BsLock className={styles.icon}></BsLock>
          <a>change password</a>
        </li>
        <li>
          <BsCreditCard className={styles.icon}></BsCreditCard>
          <a>payment methods</a>
        </li>
        <li>
          <BsWallet className={styles.icon}></BsWallet>
          <a>connect wallet</a>
        </li>
        <li>
          <BsHouseDoor className={styles.icon}></BsHouseDoor>
          <a>manage address</a>
        </li>
        <li>
          <BsPhoneVibrate className={styles.icon}></BsPhoneVibrate>
          <a>need help</a>
        </li>
        <li>
          <BiLogOut className={styles.icon}></BiLogOut>
          <a>logout </a>
        </li>
      </ul>
    </div>
  );
}
