import React from "react";
import styles from "./menupost.module.css";
import Image from "next/image";

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.wrapper}>
      {withImage && (
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            width={60}
            height={60}
            alt=""
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.category}>badge</div>
        <div className={styles.details}>
          <div className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className={styles.author}>Ahemd - </div>
          <div className={styles.time}>2002-12-21</div>
        </div>
      </div>
    </div>
  );
};

export default MenuPost;
