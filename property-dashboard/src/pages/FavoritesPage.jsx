import React, { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";

export default function FavoritesPage(){
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")||"[]"));

  useEffect(() => {
    async function load(){
      const res = await fetch("/properties.json");
      const arr = await res.json();
      setData(arr.filter(p => favorites.includes(p.id)));
    }
    load();
  }, [favorites]);

  const toggleFav = (id) => {
    const next = favorites.includes(id) ? favorites.filter(x=>x!==id) : [...favorites, id];
    setFavorites(next);
    localStorage.setItem("favorites", JSON.stringify(next));
    setData(data.filter(d => next.includes(d.id)));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Favorites</h2>
      {data.length === 0 ? <div className="text-gray-500">No favorites yet.</div> :
        <div className="grid md:grid-cols-3 gap-4">
          {data.map(p => <PropertyCard key={p.id} property={p} view="grid" onOpen={()=>{}} isFav={favorites.includes(p.id)} toggleFav={()=>toggleFav(p.id)} />)}
        </div>
      }
    </div>
  );
}
