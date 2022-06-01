import React from "react";
import styles from "./Card2.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function Card2(props) {
  return (
    <div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={props.img}></img>
      </div>
      <div className={styles.nameContainer}>
        <span className={styles.name}> {props.name}</span>
        <span className={styles.icon}>
          <AddIcon />
        </span>
      </div>
    </div>
  );
}
