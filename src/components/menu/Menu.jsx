import React from "react";
import styles from "./menu.module.css";
import MenuCategories from "../menuCategories/MenuCategories";
import MenuPosts from "../menuPosts/MenuPosts";
const Menu = () => {
  return (
    <div className={styles.container}>
      {/* most popular */}
      <div className={styles.mostPopular}>
        {/* title */}
        <div className={styles.title}>
          <span className={styles.subtitle}>{"What's hot"}</span>
          <h3 className={styles.mainTitle}>Most Popular</h3>
        </div>
        <MenuPosts withImage={false} />
      </div>

      {/* categories */}
      <div className={styles.categories}>
        <div className={styles.title}>
          <span className={styles.subtitle}>Discover by topic</span>
          <h3 className={styles.mainTitle}>Categories</h3>
        </div>
        <MenuCategories />
      </div>

      {/* editors */}
      <div className={styles.editors}>
        <div className={styles.title}>
          <span className={styles.subtitle}> Chosen by the editor</span>
          <h3 className={styles.mainTitle}>Editors Pick</h3>
        </div>
        <MenuPosts withImage={true} />
      </div>
    </div>
  );
};

export default Menu;
