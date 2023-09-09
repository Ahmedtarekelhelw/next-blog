import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.post}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.postContent}>
        <div className={styles.time}>
          2021-08-16 14:59:07 - <span className={styles.category}>Culture</span>
        </div>
        <h4 className={styles.postTitle}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut.
        </h4>
        <p className={styles.postDesc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          necessitatibus aliquid veniam culpa fugiat repellendus nisi. Corporis
          sunt doloremque earum incidunt, non doloribus libero ullam nam. Ut non
          inventore distinctio!
        </p>
        <Link href="/" className={styles.btn}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
