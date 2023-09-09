import React from "react";
import styles from "./menuPosts.module.css";
import MenuPost from "../menuPost/MenuPost";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.container}>
      <MenuPost withImage={withImage} />
      <MenuPost withImage={withImage} />
      <MenuPost withImage={withImage} />
      <MenuPost withImage={withImage} />
    </div>
  );
};

export default MenuPosts;
