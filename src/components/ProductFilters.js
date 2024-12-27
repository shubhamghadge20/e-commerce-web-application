import React from 'react';

const ProductFilters = ({ onFilterChange }) => {
  const handleCategoryChange = (e) => {
    onFilterChange('category', e.target.value);
  };

  const handlePriceChange = (e) => {
    onFilterChange('price', e.target.value);
  };

  const handleRatingsChange = (e) => {
    onFilterChange('ratings', e.target.value);
  };

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
      {/* Category Filter */}
      <select
        onChange={handleCategoryChange}
        className="p-2 border rounded mb-4 sm:mb-0 w-full sm:w-auto"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {/* Price Filter */}
      <select
        onChange={handlePriceChange}
        className="p-2 border rounded mb-4 sm:mb-0 w-full sm:w-auto"
      >
        <option value="">Max Price</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>

      {/* Ratings Filter */}
      <select
        onChange={handleRatingsChange}
        className="p-2 border rounded mb-4 sm:mb-0 w-full sm:w-auto"
      >
        <option value="">Min Ratings</option>
        <option value="4">4 Stars</option>
        <option value="3">3 Stars</option>
        <option value="2">2 Stars</option>
      </select>
    </div>
  );
};

export default ProductFilters;
