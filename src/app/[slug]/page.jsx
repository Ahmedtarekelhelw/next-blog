import React from "react";
import styles from "./singleBlog.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
const SingleBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h3 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            totam rem blanditiis! Aspernatur veniam voluptatum, hic iure
          </h3>
          <div className={styles.autherInfo}>
            <Image
              src="/logo.png"
              alt=""
              width={60}
              height={60}
              className={styles.userImg}
            />
            <h3 className={styles.name}>
              Ahmed
              <span className={styles.time}>2002 - 20 - 21</span>
            </h3>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.img} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            hic distinctio fuga molestiae suscipit cumque harum vero nobis. A
            sequi dolorem dolorum, sapiente nobis error labore assumenda
            provident quae doloribus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            hic distinctio fuga molestiae suscipit cumque harum vero nobis. A
            sequi dolorem dolorum, sapiente nobis error labore assumenda
            provident quae doloribus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            hic distinctio fuga molestiae suscipit cumque harum vero nobis. A
            sequi dolorem dolorum, sapiente nobis error labore assumenda
            provident quae doloribus.
            <br />
          </p>
          <Comments />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SingleBlog;
