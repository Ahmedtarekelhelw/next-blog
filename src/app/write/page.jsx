"use client";
import React, { useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";

// import ReactQuill from "react-quill";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

const Write = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (status !== "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input placeholder="title" className={styles.titleInput} />
      <div className={styles.editors}>
        <button className={styles.addbtn} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" style={{ display: "none" }} />
            <button className={styles.addbtn}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addbtn}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addbtn}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
      </div>
      <ReactQuill
        className={styles.textArea}
        onChange={setValue}
        theme="bubble"
        value={value}
        placeholder="Tell your story..."
      />

      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default Write;
