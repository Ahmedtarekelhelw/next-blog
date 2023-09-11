import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const Card = ({ post }) => {
  return (
    <div className={styles.post}>
      {post?.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.postContent}>
        <div className={styles.time}>
          {moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")} -{" "}
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <h4 className={styles.postTitle}>{post.title}</h4>
        <p className={styles.postDesc}>{post.desc}</p>
        <Link href={`posts/${post.slug}`} className={styles.btn}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
