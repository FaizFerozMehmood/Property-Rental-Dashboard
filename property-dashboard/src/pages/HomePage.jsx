import React, { useEffect, useMemo, useState } from "react";
import FiltersBar from "../components/FiltersBar";
import PropertyCard from "../components/PropertyCard";
import PropertyDetails from "../components/PropertyDetails";
import mapPlaceholder from "/images/lahoremap.jpg"

export default function HomePage(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

// states
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [type, setType] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 300000]); // [min, max]
  const [view, setView] = useState("grid"); // grid or list
  const [minMax, setMinMax] = useState([0, 300000]); // actual min/max from data
  const [selected, setSelected] = useState(null); // property for modal
  const [ratingFilter, setRatingFilter] = useState(0);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem("favorites")||"[]"));

  useEffect(() => {
    async function fetchData(){
      setLoading(true);
      try {
        const res = await fetch("/properties.json");
        const arr = await res.json();
        setData(arr);
        const prices = arr.map(p => p.price);
        const min = Math.min(...prices);
        const max = Math.max(...prices);
        setPriceRange([min, max]);
        setMinMax([min, max]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // kEPT in localStorage===>
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id]);
  };
  const filtered = useMemo(() => {
    if(!data) return [];
    return data.filter(p => {
      if(city !== "All" && p.city !== city) return false;
      if(type !== "All" && p.type !== type) return false;
      if(p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if(ratingFilter > 0 && p.rating < ratingFilter) return false;
      if(search && !(`${p.title} ${p.city} ${p.type} ${p.description}`.toLowerCase().includes(search.toLowerCase()))) return false;
      return true;
    });
  }, [data, city, type, priceRange, search, ratingFilter]);

  return (
    <div>
      <FiltersBar
        data={data}
        loading={loading}
        search={search}
        setSearch={setSearch}
        city={city}
        setCity={setCity}
        type={type}
        setType={setType}
        view={view}
        setView={setView}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        minMax={minMax}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      {loading ? (
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {Array.from({length:6}).map((_,i)=>(<div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-lg skeleton h-40"/>))}
        </div>
      ) : (
        <div className={`mt-6 ${view === "grid" ? "grid md:grid-cols-3 gap-6" : "flex flex-col gap-4"}`}>
          {filtered.map(p => (
            <PropertyCard
              key={p.id}
              property={p}
              view={view}
              onOpen={() => setSelected(p)}
              isFav={favorites.includes(p.id)}
              toggleFav={() => toggleFavorite(p.id)}
            />
          ))}
          {filtered.length === 0 && <div className="text-center py-8 text-gray-500">No properties found.</div>}
        </div>
      )}

      <section className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">

  <div className="px-4 py-3 border-b dark:border-gray-700 flex items-center justify-between">
    <h3 className="font-semibold text-sm">Location Map</h3>
    <span className="text-xs text-gray-500 dark:text-gray-400">
      Preview
    </span>
  </div>

  <div className="relative w-full h-52 sm:h-60 md:h-72 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
    <img
      src={mapPlaceholder}
      alt="Map placeholder"
      className="w-full h-full object-cover opacity-90"
    />

    {/* Overlay message */}
    {/* <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-gray-800/90 text-xs px-2 py-1 rounded">
      Static map preview
    </div> */}
  </div>

</section>


      {selected && <PropertyDetails property={selected} onClose={() => setSelected(null)} onToggleFav={() => toggleFavorite(selected.id)} isFav={favorites.includes(selected.id)} />}
    </div>
  );
}
