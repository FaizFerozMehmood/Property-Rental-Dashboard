import React from "react";
import { FaTimes, FaHeart, FaStar } from "react-icons/fa";

export default function PropertyDetails({ property, onClose, isFav, onToggleFav }){
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div>
            <h3 className="font-semibold">{property.title}</h3>
            <div className="text-sm text-gray-500 dark:text-gray-300">{property.city} • {property.type}</div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={onToggleFav} className={`p-2 rounded ${isFav ? "text-red-500" : "text-gray-400"}`}><FaHeart/></button>
            <button onClick={onClose} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"><FaTimes/></button>
          </div>
        </div>

        <div className="p-4 grid md:grid-cols-2 gap-4">
          <div>
            <img src={property.image} alt="" className="w-full h-64 object-cover rounded" />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <div className="text-lg font-bold">PKR {property.price.toLocaleString()}</div>
              <div className="flex items-center gap-1 text-yellow-500"><FaStar/>{property.rating}</div>
            </div>

            <p className="mt-3 text-gray-600 dark:text-gray-300">{property.description}</p>

            <ul className="mt-4 space-y-2 text-sm">
              <li><strong>Beds:</strong> {property.beds}</li>
              <li><strong>Baths:</strong> {property.baths}</li>
              <li><strong>Area:</strong> {property.area}</li>
            </ul>

            <div className="mt-6">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded">Contact Owner</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
