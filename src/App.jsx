import { useState, useEffect } from "react";
import Portfolio from "./components/Portfolio";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  

  return <Portfolio theme={theme} setTheme={setTheme} />;
}
