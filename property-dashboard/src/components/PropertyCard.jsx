import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
export default function PropertyCard({ property, view="grid", onOpen, isFav=false, toggleFav }) {

  return (
  <article
  className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden flex 
  ${view === "list" ? "flex-row gap-3 sm:gap-4" : "flex-col"}`}
>
  <div
    className={`bg-gray-200 flex-shrink-0
    ${
      view === "list"
        ? "w-24 h-24 sm:w-48 sm:h-auto"
        : "h-48 w-full"
    }`}
  >
    <img
      src={property.image}
      alt={property.title}
      className="w-full h-full object-cover"
    />
  </div>
  <div className="p-3 sm:p-4 flex-1 flex flex-col">
    <div className="flex items-start justify-between gap-2">
      <div>
        <h4 className="font-semibold text-sm sm:text-base">
          {property.title}
        </h4>
        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
          {property.city} • {property.type}
        </div>
      </div>

      <button
        onClick={toggleFav}
        className={`p-1.5 sm:p-2 rounded ${
          isFav ? "text-red-500" : "text-gray-400"
        }`}
      >
        <FaHeart />
      </button>
    </div>
    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex-1 line-clamp-2">
      {property.description}
    </p>
    <div className="mt-3 sm:mt-4 flex items-center justify-between">
      {/* Price + Rating */}
      <div className="flex items-center gap-4 text-xs sm:text-sm">
        <span className="font-bold">
          PKR {property.price.toLocaleString()}
        </span>

        <span className="flex items-center gap-1.5 text-yellow-500">
          <FaStar /> {property.rating}
        </span>
      </div>
      <div className="ml-3 sm:ml-4">
        <button
          type="button"
          onClick={onOpen}
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600
          font-medium rounded text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2.5"
        >
          View
        </button>
      </div>
    </div>
  </div>
</article>




  );
}
