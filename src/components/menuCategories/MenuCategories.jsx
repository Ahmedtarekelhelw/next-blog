import React from "react";
import styles from "./menuCategories.module.css";
import { categories } from "@/categories";
const MenuCategories = () => {
  return (
    <div className={styles.menuCategories}>
      {categories.map((cat) => (
        <div
          className={styles.category}
          key={cat.id}
          style={{ backgroundColor: cat.color }}
        >
          {cat.name}
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;
