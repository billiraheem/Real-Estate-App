import React, { useState } from "react";
import "./search.scss";

const Search = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  return (
    <div className="search">
      <div className="type">
        <button>Buy</button>
        <button>Rent</button>
      </div>

      <form>
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button src="/search.png"></button>
      </form>
    </div>
  );
};

export default Search;
