import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";

export default function App(){
  const [route, setRoute] = useState(window.location.hash || "#/");




  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);





  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if(theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        {route === "#/favorites" ? <FavoritesPage /> : <HomePage />}
      </main>
    </div>
  );
}


