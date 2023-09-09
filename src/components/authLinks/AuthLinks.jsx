"use client";

import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const auth = false;
  return (
    <>
      {auth ? (
        <>
          <Link href="/write" className={styles.link}>
            Wrtie
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">HomePage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {auth ? (
            <>
              <Link href="/write">Wrtie</Link>
              <span className={styles.logout}>Logout</span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
