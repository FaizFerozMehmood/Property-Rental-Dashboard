import React from "react";
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";

export default function Navbar(){
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="flex items-center justify-between p-4 md:p-6 bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-lg shadow-sm max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">PR</div>
        <div>
          <div className="font-semibold">Property Rentals</div>
          <div className="text-xs text-gray-500 dark:text-gray-300">Dashboard</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <a href="#/favorites" className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          <FaHeart /> Favorites
        </a>
        <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
          {document.documentElement.classList.contains("dark") ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
