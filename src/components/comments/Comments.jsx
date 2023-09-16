"use client";

import React, { useRef } from "react";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import axios from "axios";
import { CustomAxios } from "@/utlits/api";

const getComments = async (url) => {
  try {
    const res = await CustomAxios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading, mutate } = useSWR(
    `comments?postSlug=${"1"}`,
    getComments
  );
  const inputRef = useRef();
  const commentsRef = useRef();

  const makeComment = async (e) => {
    e.preventDefault();
    const res = await CustomAxios.post("comments", {
      desc: inputRef.current.value,
      postSlug,
    });
    mutate();
    commentsRef.current.scrollIntoView({ behavior: "smooth" });
    inputRef.current.value = "";
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Comments</h3>
      <form className={styles.form} onSubmit={makeComment}>
        <input
          className={styles.input}
          placeholder="Write Your Comment"
          ref={inputRef}
          required
        />
        <button className={styles.btn} type="submit">
          Comment
        </button>
      </form>
      <div className={styles.comments}>
        {data?.length ? (
          data?.map((comment) => (
            <div className={styles.comment} key={comment.id} ref={commentsRef}>
              <div className={styles.userInfo}>
                <Image
                  src={comment.user.image}
                  alt=""
                  width={60}
                  height={60}
                  className={styles.img}
                />
                <h3 className={styles.username}>
                  {comment.user.name}
                  <span className={styles.time}>{comment.createdAt}</span>
                </h3>
              </div>
              <p className={styles.text}>{comment.desc}</p>
            </div>
          ))
        ) : (
          <h3>There is No Comment</h3>
        )}
      </div>
    </div>
  );
};

export default Comments;
