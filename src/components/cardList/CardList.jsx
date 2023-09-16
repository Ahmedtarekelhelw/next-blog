import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import axios from "axios";
import { CustomAxios } from "@/utlits/api";

const getPosts = async (page, cat) => {
  try {
    const res = await CustomAxios.get(`posts?page=${page}&cat=${cat || ""}`);
    return {
      posts: res.data.posts,
      hasNext: res.data.hasNext,
      hasPrev: res.data.hasPrev,
    };
  } catch (error) {
    console.log(error?.message);
  }
};
const CardList = async ({ page, cat }) => {
  const { posts, hasNext, hasPrev } = await getPosts(page, cat);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recent Posts</h3>
      <div className={styles.postsContainer}>
        {posts?.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  );
};

export default CardList;
