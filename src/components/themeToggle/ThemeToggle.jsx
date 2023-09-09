"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useTheme } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggle } = useTheme();
  return (
    <div
      className={styles.container}
      style={theme === "light" ? { backgroundColor: "#fff" } : {}}
      onClick={() => toggle()}
    >
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === "dark" ? { right: "1px" } : { left: "1px" }}
      ></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
