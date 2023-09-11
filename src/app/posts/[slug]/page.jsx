import React from "react";
import styles from "./singleBlog.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
import axios from "axios";
import moment from "moment";

const getPost = async (slug) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/posts/${slug}`);
    return res.data.post;
  } catch (error) {
    console.log(error);
  }
};
const SingleBlog = async ({ params }) => {
  const post = await getPost(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h3 className={styles.title}>{post.title}</h3>
          <div className={styles.autherInfo}>
            {post?.user?.image && (
              <Image
                src={post.user.image}
                alt={post.slug}
                width={60}
                height={60}
                className={styles.userImg}
              />
            )}

            <h3 className={styles.name}>
              {post.user.name}
              <span className={styles.time}>
                {moment(post.createdAt).format("YYYY-MM-DD")}
              </span>
            </h3>
          </div>
        </div>
        {post?.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="" fill className={styles.img} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.postDesc}
            dangerouslySetInnerHTML={{ __html: post.desc }}
          />
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlog;
