"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import "react-quill/dist/quill.bubble.css";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/utlits/firebase";
import dynamic from "next/dynamic";

const Write = () => {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const { status } = useSession();

  const router = useRouter();

  // title
  const titleRef = useRef();

  // Desc
  const [file, setFile] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const [open, setOpen] = useState(false);

  if (status !== "authenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const upload = async (file) => {
    const name = new Date().getTime() + file.name;

    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          const res = await axios.post("http://localhost:3000/api/posts", {
            img: downloadURL,
            title: titleRef.current.value,
            desc,
            slug: slugify(titleRef.current.value),
            catSlug: catSlug || "style",
          });
        });
      }
    );
  };

  useEffect(() => {
    if (file && submit) {
      upload(file);
      setSubmit(false);
    } else if (submit) {
      const SubmitFun = async () => {
        const res = await axios.post("http://localhost:3000/api/posts", {
          img: "",
          title: titleRef.current.value,
          desc,
          slug: slugify(titleRef.current.value),
          catSlug: catSlug || "style",
        });
        setSubmit(false);
      };
      SubmitFun();
    }
  }, [file, submit]);

  const handleSubmit = async () => {
    setSubmit(true);
    // const res = await axios.post("http://localhost:3000/api/posts", {
    //   img: imgUrl,
    //   title: titleRef.current.value,
    //   desc,
    //   slug: slugify(titleRef.current.value),
    //   catSlug: catSlug || "style",
    // });

    // console.log(res.data);

    // router.push("/")
  };

  return (
    <div className={styles.container}>
      <input placeholder="title" className={styles.titleInput} ref={titleRef} />
      <select
        className={styles.select}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editors}>
        <button className={styles.addbtn} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              style={{ display: "none" }}
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
            />

            <button className={styles.addbtn}>
              <label htmlFor="file">
                <Image
                  src="/image.png"
                  alt=""
                  width={16}
                  height={16}
                  style={{ cursor: "pointer" }}
                />
              </label>
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
        onChange={setDesc}
        theme="bubble"
        value={desc}
        placeholder="Tell your story..."
      />

      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default Write;
