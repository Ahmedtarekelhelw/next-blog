"use client";

import React from "react";
import styles from "./login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.googleLogin} ${styles.btn}`}
          onClick={() => signIn("google")}
        >
          Sign in With Google
        </div>
        <div
          className={`${styles.githubLogin} ${styles.btn}`}
          onClick={() => signIn("github")}
        >
          Sign in With Github
        </div>
        <div
          className={`${styles.facebookLogin} ${styles.btn}`}
          onClick={() => signIn("facebook")}
        >
          Sign in With Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
