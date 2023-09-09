import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.googleLogin} ${styles.btn}`}>
          Sign in With Google
        </div>
        <div className={`${styles.githubLogin} ${styles.btn}`}>
          Sign in With Github
        </div>
        <div className={`${styles.facebookLogin} ${styles.btn}`}>
          Sign in With Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
