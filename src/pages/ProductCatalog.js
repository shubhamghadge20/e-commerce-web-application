import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { useCart } from '../context/CartContext';
import axios from 'axios';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', price: '', ratings: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state
  const { addToCart } = useCart();

  useEffect(() => {
    // Fetch products, including electronics, from the API
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);  // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);  // Stop loading even if there's an error
      });
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (!filters.category || product.category === filters.category) &&
      (!filters.price || product.price <= filters.price) &&
      (!filters.ratings || product.rating >= filters.ratings) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-3 w-full sm:w-1/2 mb-4 sm:mb-0 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ProductFilters onFilterChange={handleFilterChange} />
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
          <p className="text-xl text-gray-600 mt-4">Fetching products...</p>
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">No products found matching your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} onAddToCart={addToCart} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
