import React from "react";
import styles from "./Section3.module.css";

export default function Section3() {
  return (
    <div className={styles.Section3}>
      <p>CROSS REALITY FASHION</p>
      <div className={styles.ImagesContainer}>
        <div className={styles.Img1Container}>
          <img src="Section3-1.png" className={styles.img1}></img>
        </div>

        <div className={styles.Image2andTextContainer}>
          <div className={styles.textContainer}>
            <p>
              Here at BridXe, we are interested in connecting the metaverse and
              the real world through fashion. All our clothing pieces come as a
              Non-Fungible Token (NFT) which can be used in both real and
              virtual worlds.
            </p>
          </div>
          <div className={styles.twoImgContainer}>
            <div className={styles.img2Div}>
              <img src="Section3-2.png" className={styles.img2}></img>
            </div>
            <div className={styles.img3Div}>
              <img src="Sectio3-3.png" className={styles.img3}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
