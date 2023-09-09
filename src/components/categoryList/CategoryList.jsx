import React from "react";
import styles from "./categoryList.module.css";
import { categories } from "@/categories";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {categories.map((cat) => (
          <Link
            href={`category/${cat.id}`}
            className={styles.category}
            key={cat.id}
            style={{ backgroundColor: cat.color }}
          >
            <Image
              src={cat.img}
              alt={cat.name}
              className={styles.img}
              width={30}
              height={30}
            />
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
