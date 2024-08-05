import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
  }, [theme])
  return (
    <>
      <ThemeProvider value={{ theme, toggleTheme }}>
        <div className="flex justify-center my-64">
          <div className="flex flex-col gap-8">
            <ThemeButton />
            <Card />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}