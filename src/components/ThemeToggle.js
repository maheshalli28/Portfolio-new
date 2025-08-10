import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-secondary rounded-circle p-2"
      title="Toggle Theme"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
