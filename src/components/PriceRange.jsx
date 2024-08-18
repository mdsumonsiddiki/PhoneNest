import { useState } from "react";


const PriceRange = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
  
    const handleMinPriceChange = (e) => {
      setMinPrice(e.target.value);
    };
  
    const handleMaxPriceChange = (e) => {
      setMaxPrice(e.target.value);
    };
    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-spaceCadet mb-4">Filter by Price Range</h2>
        <div className="flex items-center mb-4">
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="w-1/3 p-2 border border-orange rounded mr-2"
            min="0"
          />
          <span className="mx-2">-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="w-1/3 p-2 border border-orange rounded ml-2"
            max="10000"
          />
        </div>
        <input
          type="range"
          min="0"
          max="10000"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="w-full h-2 bg-orange rounded-lg appearance-none cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="10000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full h-2 bg-orange rounded-lg appearance-none cursor-pointer mt-2"
        />
      </div>
    );
};

export default PriceRange;