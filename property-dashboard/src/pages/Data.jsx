import React, { useEffect, useState } from "react";

function Data() {
  const [valuee, setvaluee] = useState([]);
  const [filterd, setFiltered] = useState([]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getdata = async () => {
      const res = await fetch("/properties.json");
      const mydata = await res.json();
      setvaluee(mydata);
      setFiltered(mydata); 
    };
    getdata();
  }, []);

  useEffect(() => {
    const filteredData = valuee.filter((item) => {
      const matchPrice =
        item.price >= Number(minPrice) && item.price <= Number(maxPrice);

      const matchSearch =
        item.city.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());

      return matchPrice && matchSearch;
    });

    setFiltered(filteredData);
  }, [query, minPrice, maxPrice, valuee]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by city or description..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <input
        type="range"
        min={0}
        max={maxPrice}
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <p>Min Price: {minPrice}</p>

      <input
        type="range"
        min={minPrice}
        max={5000}
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <p>Max Price: {maxPrice}</p>

      {filterd.map((e) => (
        <div key={e.id}>
          <p>{e.city}</p>
          <p>{e.description}</p>
          <img src={e.image} alt="img" width={200} />
        </div>
      ))}
    </div>
  );
}

export default Data;
