"use client";

import React, { useRef } from "react";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const inputRef = useRef();
  const commentsRef = useRef();

  const makeComment = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
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
        {Array(50)
          .fill()
          .map((a, i) => (
            <div className={styles.comment} key={i} ref={commentsRef}>
              <div className={styles.userInfo}>
                <Image
                  src="/p1.jpeg"
                  alt=""
                  width={60}
                  height={60}
                  className={styles.img}
                />
                <h3 className={styles.username}>
                  Ahmed
                  <span className={styles.time}>2203 - 03 - 01</span>
                </h3>
              </div>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                hic
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
