import React, { useMemo } from "react";
import { FaTh, FaList } from "react-icons/fa";

export default function FiltersBar({
  data,
  search, setSearch,
  city, setCity,
  type, setType,
  view, setView,
  priceRange, setPriceRange,
  minMax,
  ratingFilter, setRatingFilter,
}) {

 // UNIQUE citi */
  const cities = useMemo(() => {
    if (!data) return [];
    return ["All", ...new Set(data.map(item => item.city))];
  }, [data]);

  // UNIQUE property type */
  const types = useMemo(() => {
    if (!data) return [];
    return ["All", ...new Set(data.map(item => item.type))];
  }, [data]);
  const handleMinPrice = (value) => {
    const min = Number(value);
    setPriceRange(([_, max]) => [Math.min(min, max), max]);
  };
  const handleMaxPrice = (value) => {
    const max = Number(value);
    setPriceRange(([min]) => [min, Math.max(max, min)]);
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-4">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Search property..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded dark:border-gray-700 bg-transparent"
        />
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded dark:border-gray-700 bg-sky-500/100"
        >
          {cities.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-3 py-2 rounded text-sm
              ${type === t
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700"}
            `}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-sm">
          Price: <span className="text-gray-500">{priceRange[0]} - {priceRange[1]}</span>
        </p>

        <div className="flex flex-col gap-2">
          <input
            type="range"
            min={minMax[0]}
            max={minMax[1]}
            value={priceRange[0]}
            onChange={(e) => handleMinPrice(e.target.value)}
          />
          <input
            type="range"
            min={minMax[0]}
            max={minMax[1]}
            value={priceRange[1]}
            onChange={(e) => handleMaxPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-sm">Min Rating</span>
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(Number(e.target.value))}
            className="p-2 border rounded dark:border-gray-700 bg-sky-500/100"
          >
            <option value={0}>Any</option>
            <option value={3}>3+</option> 
            <option value={4}>4+</option>
            <option value={4.5}>4.5+</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded
              ${view === "grid"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700"}
            `}
          >
            <FaTh />
          </button>

          <button
            onClick={() => setView("list")}
            className={`p-2 rounded
              ${view === "list"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700"}
            `}
          >
            <FaList />
          </button>
        </div>

      </div>

    </div>
  );
}
