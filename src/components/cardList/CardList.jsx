import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
const CardList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recent Posts</h3>
      <div className={styles.postsContainer}>
        {Array(5)
          .fill()
          .map((el, i) => (
            <Card key={i} />
          ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
