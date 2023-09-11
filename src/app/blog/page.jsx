import React from "react";
import styles from "./blog.module.css";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const Blog = ({ searchParams }) => {
  const page = +searchParams.page || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <div className={styles.title}>{cat} Blog</div>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
