import React from "react";
import styles from "./Card3.module.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Card1(props) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src="Section5-2.png"></img>
      </div>
      <div className={styles.nameContainer}>
        <span className={styles.name}> BRIDXE T-SHIRT {props.name}</span>
        <span className={styles.icon}>
          <FavoriteBorderOutlinedIcon />
        </span>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.orgPrice}>Price USD {props.orgPrice} </span>
        <span className={styles.DisPrice}> {props.disPrice}</span>
      </div>
    </div>
  );
}
