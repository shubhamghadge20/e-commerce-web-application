import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate(); // Use the navigate hook

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <div className="border border-gray-200 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="relative mb-4">
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <svg
              className="w-8 h-8 animate-spin text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v4m0 8v4m4-4h4m-8 0H4"
              />
            </svg>
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg transition-transform transform hover:scale-110 duration-300 ease-in-out"
          onLoad={handleImageLoad}
        />
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">{product.name}</h3>
        <p className="text-lg text-gray-600">${product.price}</p>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <button
          onClick={handleAddToCart} // Simply handle the add-to-cart action
          className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none mb-2 sm:mb-0"
          aria-label="Add product to cart"
        >
          Add to Cart
        </button>

        <Link
          to={`/product/${product.id}`}
          className="text-sm text-blue-600 hover:underline mt-2 sm:mt-0 inline-block transition duration-300"
          aria-label="View product details"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
