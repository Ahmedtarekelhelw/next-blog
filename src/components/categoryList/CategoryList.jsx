import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const getCategories = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/categories");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const CategoryList = async () => {
  const categories = await getCategories();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Popular Categories</h2>
      <div className={styles.categories}>
        {categories?.map((cat) => (
          <Link
            href={`blog?cat=${cat.slug}`}
            className={styles.category}
            key={cat.id}
            style={{ backgroundColor: cat.color }}
          >
            {cat?.img && (
              <Image
                src={cat.img}
                alt={cat.title}
                className={styles.img}
                width={30}
                height={30}
              />
            )}
            <span>{cat.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
