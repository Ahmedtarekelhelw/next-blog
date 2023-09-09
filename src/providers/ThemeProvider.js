"use client";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
