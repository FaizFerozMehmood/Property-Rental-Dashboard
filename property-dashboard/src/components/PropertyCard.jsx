import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
export default function PropertyCard({ property, view="grid", onOpen, isFav=false, toggleFav }) {

  return (
    <article className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden flex ${view==="list" ? "flex-row gap-4" : "flex-col"}`}>
      <div className={`${view==="list" ? "w-48 flex-shrink-0" : "h-48 w-full" } bg-gray-200`}>
        <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold">{property.title}</h4>
            <div className="text-sm text-gray-500 dark:text-gray-300">{property.city} • {property.type}</div>
          </div>
          <button onClick={toggleFav} className={`p-2 rounded ${isFav ? "text-red-500" : "text-gray-400"}`}><FaHeart/></button>
        </div>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-1">{property.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold">PKR {property.price.toLocaleString()}</span>
            <span className="flex items-center gap-1 text-yellow-500"><FaStar/>{property.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            {/* <button  ="px-3 py-1 bg-indigo-600 text-white rounded">View</button> */}
            <button type="button" onClick={onOpen} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">View</button>

          </div>
        </div>
      </div>
    </article>
  );
}
