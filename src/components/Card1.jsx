import React from "react";
import styles from "./Card1.module.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Card1(props) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={props.img}></img>
      </div>
      <div className={styles.nameContainer}>
        <span className={styles.name}> BRIDXE {props.name}</span>
        <span className={styles.icon}>
          <FavoriteBorderOutlinedIcon />
        </span>
      </div>
      <div className={styles.priceContainer}>
        <span className={styles.orgPrice}> {props.orgPrice} </span>
        <span className={styles.DisPrice}> {props.disPrice}</span>
      </div>
    </div>
  );
}
